import React from 'react';

function PreviewSection({ text }) {
  return (
    <div>
      <h2>Vorschau:</h2>
      <pre style={{ background: '#eee', padding: '1rem', whiteSpace: 'pre-wrap' }}>
        {text}
      </pre>
    </div>
  );
}

export default PreviewSection;