import React, { useState } from 'react';
import './AdminDashboard.css';
import {
  FaShoppingBag,
  FaBars,
  FaRegChartBar,
  FaCommentAlt,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const AdminDashboard = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fraudDetectionHtml, setFraudDetectionHtml] = useState(null);

  const toggle = () => setIsOpen(!isOpen);

  const loadHtmlContent = async (url) => {
    try {
      console.log('Fetching HTML from:', url);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch HTML: ${response.status} ${response.statusText}`);
    }

      console.log('Fetch successful');

      const htmlContent = await response.text();
      console.log('HTML content:', htmlContent);

      setFraudDetectionHtml(htmlContent);
    } catch (error) {
      console.error('Fetch error:', error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  const menuItem = [
    {
      path: '/userdetails',
      name: 'Customer Details',
      icon: <FaShoppingBag />,
    },
    {
      path: '/transaction',
      name: 'Transaction Monitoring',
      icon: <FaRegChartBar />,
    },
    {
      path: '/fraud',
      name: 'Fraud Detection',
      icon: <FaCommentAlt />,
      onClick: () => loadHtmlContent('http://127.0.0.1:5500/public/credit%20card%20detection.html'),
    },
    {
        path: "/anomoly",
        name: "Anomoly Detection",
        icon: <FaRegChartBar />
    },
  ];

  return (
    <div className="ab" style={{ backgroundImage: "url('https://pngimg.com/uploads/bank/bank_PNG24.png')" }}>
      <div style={{ width: isOpen ? '300px' : '70px' }} className="sidebar">
        <br></br>
        <div className="top_section">
          <br></br>
          <div style={{ marginLeft: isOpen ? '0px' : '0px' }} className="bars">
            <FaBars onClick={toggle} />
          </div>
          <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
            &nbsp;&nbsp;&nbsp;&nbsp;ADMIN
          </h1>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
            onClick={item.onClick}
          >
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>
        {fraudDetectionHtml ? (
          <div dangerouslySetInnerHTML={{ __html: fraudDetectionHtml }} />
        ) : (
          children
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;