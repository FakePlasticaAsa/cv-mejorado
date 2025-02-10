import React, { useState, useEffect } from 'react';

function CVform() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    // Add more fields as needed
  });

  useEffect(() => {
    fetch("http://<tu_IP>/api.php")
      .then(res => res.json())
      .then(data => setFormData(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Phone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CVform;
