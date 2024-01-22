import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <h1>About Our Bank</h1>
      <p>
        Our bank has a rich history of serving our community for over 100 years. We're committed to providing exceptional financial services to our customers, helping them achieve their financial goals.
      </p>
      <h2>Our Values</h2>
      <ul>
        <li>Trustworthiness</li>
        <li>Customer focus</li>
        <li>Integrity</li>
        <li>Financial expertise</li>
        <li>Community engagement</li>
      </ul>

      <h2>Our Team</h2>
      <div className="team-section">
        <h3>John Smith, CEO</h3>
        <p>John has over 20 years of experience in the banking industry. He's passionate about providing personalized service to our customers and helping them reach their financial goals.</p>

        <h3>Jane Doe, Head of Customer Relations</h3>
        <p>Jane is dedicated to ensuring our customers have a positive experience with our bank. She's always available to answer questions and address any concerns.</p>

        {/* Add more team members here */}
      </div>

      <h2>Contact Us</h2>
      <div className="contact-section">
        <p>
          Phone: 555-555-5555<br />
          Email: info@ourbank.com<br />
          Address: 123 Main Street, Anytown, USA
        </p>
        <p>
          <a href="mailto:info@ourbank.com">Email Us</a>
        </p>
      </div>
    </div>
  );
}

export default About;