import React, { useState } from 'react';
import UploadSection from './components/UploadSection';
import PreviewSection from './components/PreviewSection';
import axios from 'axios';

function App() {
  const [cvFile, setCvFile] = useState(null);
  const [jobFile, setJobFile] = useState(null);
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    // ✅ Debug-Logs
    console.log('cvFile:', cvFile);
    console.log('jobFile:', jobFile);

    if (!cvFile || !jobFile) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('cv', cvFile);
    formData.append('job', jobFile);

    try {
      const res = await axios.post('https://anschreiben-backend.onrender.com/generate', formData);
      setOutput(res.data.text);
    } catch (err) {
      console.error('Fehler beim Request:', err); // ✅ Noch mehr Debug
      setOutput('Fehler bei der Anfrage.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Online Anschreiben Generator</h1>
      <UploadSection setCvFile={setCvFile} setJobFile={setJobFile} />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Generiere...' : 'Anschreiben erstellen'}
      </button>
      <PreviewSection text={output} />
    </div>
  );
}

export default App;