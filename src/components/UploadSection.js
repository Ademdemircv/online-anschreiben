import React from 'react';

function UploadSection({ setCvFile, setJobFile }) {
  return (
    <div>
      <p>Lebenslauf (PDF/Bild):</p>
      <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => setCvFile(e.target.files[0])} />
      <p>Stellenanzeige (PDF/Bild):</p>
      <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => setJobFile(e.target.files[0])} />
    </div>
  );
}

export default UploadSection;