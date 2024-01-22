import React, { useState } from 'react';
import Louheader from './Louheader';
import LouDocForm from './LouDocForm';
import LouDocList from './LouDocList';
import Loufooter from './Loufooter';
import './Loudoc.css';

const LouDocPage = () => {
  const [documents, setDocuments] = useState([]);

  const handleSubmit = (document) => {
    // Simulate submission to a server or storage
    // For a real application, you would handle the submission logic here
    setDocuments((prevDocuments) => [...prevDocuments, document]);
  };

  return (
    <div>
      <Louheader />
      <div className="main-content">
        <LouDocForm onSubmit={handleSubmit} />
        <LouDocList documents={documents} />
      </div>
      <Loufooter />
    </div>
  );
};

export default LouDocPage;