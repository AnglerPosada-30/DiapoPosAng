import React from 'react';

export function Slide({ data }) {
  // Enlace del documento generado
  const docUrl = "https://docs.google.com/document/d/1sN-60BmF1Hmf69v4AztAlhVXOzm4FcAaRg84fDWo0RY/edit?usp=drive_web";

  return (
    <div className="slide-card">
      <div className="slide-header">
        <span className="slide-icon">{data.icon}</span>
        <h1>{data.title}</h1>
      </div>
      
      <div className="slide-body">
        <ul>
          {data.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {data.isDownloadSlide && (
          <div className="download-section">
            <a href={docUrl} target="_blank" rel="noopener noreferrer" className="fluent-btn primary">
              Descargar Manual en Google Docs
            </a>
          </div>
        )}
      </div>
    </div>
  );
}