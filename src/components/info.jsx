import React, { useState, useEffect } from 'react';

function Info() {
  const [cv, setCV] = useState({});

  useEffect(() => {
    fetch("http://100.123.97.64/api.php")
      .then(res => res.json())
      .then(data => setCV(data));
  }, []);

  return (
    <div>
      <h2>CV Information</h2>
      <div>
        <p>Name: {cv.name}</p>
        <p>Profession: {cv.profession}</p>
        <p>Experience: {cv.experience}</p>
        <p>Email: {cv.email}</p>
      </div>
    </div>
  );
}

export default Info;
