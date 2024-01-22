import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './Analytics.css';
const Analytics = () => {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../data1.csv', {
          headers: {
            'Content-Type': 'text/csv', // Set the content type to CSV
          },
        });

        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          complete: (result) => {
            // result.data contains the parsed CSV data
            setCsvData(result.data);
          },
        });
      } catch (error) {
        console.error('Error fetching or parsing CSV file:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1> Data</h1>
      <table className='tab'>
        <thead>
          <tr className='tablerow'>
            {/* Assuming the CSV file has headers */}
            {csvData.length > 0 &&
              Object.keys(csvData[0]).map((header) => (
                <th key={header} className='hello'>{header}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {csvData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, index) => (
                <td key={index}  className='hello'>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Analytics;