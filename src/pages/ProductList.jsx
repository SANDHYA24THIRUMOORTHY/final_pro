import React, { useState } from 'react';
import './ProductList.css'; // Don't forget to create the CSS file

const ProductList = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    dailySummary: true,
    weeklySummary: false,
    preferredLanguage: 'en',
    themePreference: 'light',
    name: 'John Doe',
    password: '****',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
  });

  //const handleChange = (setting) => {
  //  setSettings((prevSettings) => ({
     // ...prevSettings,
     // [setting]: !prevSettings[setting],
   // }));
  //};

  const handleSelectChange = (setting, value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: value,
    }));
  };

  const handleInputChange = (setting, value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: value,
    }));
  };

  const handleSaveSettings = () => {
    // TODO: Implement logic to save settings (e.g., API call, local storage)
    alert('Settings saved:', settings);
  };

  return (
    <div className="settings-page">
      <div className="settings-header">
        <h1>Manage Your Settings</h1>
        <p>Personalize your banking experience to fit your preferences.</p>
      </div>
      <div className="settings-section">
        <div className="section-header">
          <h2>Notifications</h2>
          <p>Stay informed about your account activity.</p>
        </div>
        {/* ... Notifications checkboxes */}
        
      </div>
      <div className="settings-section">
        <div className="section-header">
          <h2>Account Statements</h2>
          <p>Choose how you'd like to receive your account statements.</p>
        </div>
        <div className="settings-item">
        <label>
          Preferred Language
          <select
            value={settings.preferredLanguage}
            onChange={(e) => handleSelectChange('preferredLanguage', e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            {/* ... more languages */}
          </select>
        </label>
      </div>
      </div>
      <div className="settings-section">
        <div className="section-header">
          <h2>Personalization</h2>
          <p>Customize your banking experience.</p>
        </div>
        {/* ... Personalization fields */}
        <div className="settings-item">
          <label>
            Name
            <input
              type="text"
              value={settings.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </label>
        </div>
        <div className="settings-item">
          <label>
            Password
            <input
              type="password"
              value={settings.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
            />
          </label>
        </div>
        <div className="settings-item">
          <label>
            Email
            <input
              type="email"
              value={settings.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </label>
        </div>
        <div className="settings-item">
          <label>
            Phone Number
            <input
              type="tel"
              value={settings.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            />
          </label>
        </div>
      </div>
      <div className="settings-footer">
        <button className="save-button" onClick={handleSaveSettings}>
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default ProductList;