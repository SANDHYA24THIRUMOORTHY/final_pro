// src/components/TermsAndConditions.js
import React from 'react';

const TermsAndConditions = ({ onAgree }) => {
  return (
    <div className="terms-box">
      <h2 className="highlight">Terms and Conditions</h2>
      
        <marquee><h2>To submit a document, you need to agree to the following terms and conditions:</h2></marquee>
        <h4>This is a sample application for demonstration purposes</h4>
        <h4>Submitted documents should comply with applicable laws</h4>
        <h4>The application does not guarantee the security of submitted documents</h4>
    </div>
  );
};

export default TermsAndConditions;
