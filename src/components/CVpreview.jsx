import React from 'react';
import jsPDF from 'jspdf';

function CVpreview() {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Curriculum Vitae', 10, 10);
    // Add more details...
    doc.save('cv.pdf');
  };

  return (
    <div>
      <h2>CV Preview</h2>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
}

export default CVpreview;