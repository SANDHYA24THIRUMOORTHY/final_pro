// src/components/DocumentSubmissionPage.js
import React, { useState } from 'react';
import DocumentSubmissionForm from './DocumentSubmissionForm';
import DocumentList from './DocumentList';
import TermsAndConditions from './TermsAndConditions';
import Header from './Header';
import Footer from './Footer';

const DocumentSubmissionPage = () => {
  const [documents, setDocuments] = useState([]);

  const handleSubmit = (document) => {
    // Simulate submission to a server or storage
    // For a real application, you would handle the submission logic here
    setDocuments((prevDocuments) => [...prevDocuments, document]);
  };

  return (
    <div>
      <Header />
      <div className="main-content">
        <TermsAndConditions />
        <DocumentSubmissionForm onSubmit={handleSubmit} />
        <DocumentList documents={documents} />
      </div>
      <Footer />
    </div>
  );
};

export default DocumentSubmissionPage;
