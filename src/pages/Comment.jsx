import React, { useState } from 'react';

const commentContainerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const commentContentStyle = {
  textAlign: 'center',
};

const reportSectionStyle = {
  marginTop: '20px',
  padding: '15px',
  backgroundColor: '#ffffff',
  border: '1px solid #e1e1e1',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const reportButtonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const reportFormStyle = {
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle = {
  marginBottom: '8px',
  fontWeight: 'bold',
};

const inputStyle = {
  padding: '10px',
  marginBottom: '15px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const textAreaStyle = {
  padding: '10px',
  marginBottom: '15px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const reportButtonsStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};

const submitButtonStyle = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  backgroundColor: '#28a745',
  color: '#fff',
};

const cancelButtonStyle = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  backgroundColor: '#dc3545',
  color: '#fff',
};

function Comment() {
  const [isReporting, setIsReporting] = useState(false);
  const [reportData, setReportData] = useState({
    transactionId: "",
    description: "",
  });

  const handleReportOpen = () => {
    setIsReporting(true);
  };

  const handleReportClose = () => {
    setIsReporting(false);
    setReportData({ transactionId: "", description: "" });
  };

  const handleReportSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/submit-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reportData),
      });

      if (response.ok) {
        alert('Report submitted successfully!');
        handleReportClose();
      } else {
        alert('Report submitted successfully!');
      }
    } catch (error) {
      console.error('Error submitting report:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div style={commentContainerStyle}>
      <div style={commentContentStyle}>
        <h1>Comment Section</h1>
        <p>This is a comment section.</p>
        <div style={reportSectionStyle}>
          <h2>Report Fraudulent Activity</h2>
          <button style={reportButtonStyle} onClick={handleReportOpen}>Report</button>
          {isReporting && (
            <form style={reportFormStyle} onSubmit={handleReportSubmit}>
              <label style={labelStyle} htmlFor="transactionId" className='l'>Transaction ID:</label>
              <input className='lab'
                style={inputStyle}
                type="text"
                id="transactionId"
                value={reportData.transactionId}
                onChange={(e) => setReportData({ ...reportData, transactionId: e.target.value })}
              />
              <label style={labelStyle} htmlFor="description" className='l'>Description:</label>
              <textarea className='lab'
                style={textAreaStyle}
                id="description"
                value={reportData.description}
                onChange={(e) => setReportData({ ...reportData, description: e.target.value })}
              />
              <div style={reportButtonsStyle}>
                <button type="submit" style={submitButtonStyle}>Submit Report</button>
                <button onClick={handleReportClose} style={cancelButtonStyle}>Cancel</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Comment;