// src/components/DocumentList.js
import React, { useState } from 'react';

const DocumentList = ({ documents }) => {
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleDocumentClick = (document) => {
    setSelectedDocument(document);
  };

  return (
    <div>
      <h2>Submitted Documents</h2>
      {documents.length === 0 ? (
        <p>No documents submitted yet.</p>
      ) : (
        <div>
          {documents.map((document, index) => (
            <button key={index} onClick={() => handleDocumentClick(document)}>
              {document.name}
            </button>
          ))}
          {selectedDocument && (
            <div>
              <h3>Selected Document Details</h3>
              <p>Name: {selectedDocument.name}</p>
              <p>Size: {selectedDocument.size} bytes</p>
              <p>Type: {selectedDocument.type}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DocumentList;
