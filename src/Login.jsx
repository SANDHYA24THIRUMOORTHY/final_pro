import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css'; 

function Login() {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Assuming you have loaded your CSV data into the admins array
    const admins = [
      { adminName: 'Admin1', adminId: '001', mobileNumber: '1234567890', password: 'pass123' },
      { adminName: 'Admin2', adminId: '002', mobileNumber: '9876543210', password: 'admin@123' },
    ];

    const admin = admins.find(a => a.adminId.trim() === adminId.trim() && a.password.trim() === password.trim());

    if (admin) {
      setErrorMessage('');
      setLoggedIn(true);
    } else {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className='apple'>
    <table>
    <tr>
    <td></td>
    
    <div className='q'>
    <table>
    
        <h2 className='w'>LOGIN</h2>
        <br></br>
        <br></br>
        <br></br>
        <div>
        <label htmlFor="adminId" className='e'>Admin ID :</label>
        <input className='r' type="text" id="adminId" value={adminId} onChange={(e) => setAdminId(e.target.value)} />
        </div>
        <div>
        <br></br>
        <br></br>
        <label htmlFor="password" className='e'>Password :</label>
        <input className='r' type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <br></br>
        <br></br>
        <Link to="/admin">
        <button onClick={handleLogin} className='t'>Submit</button>
        </Link>
        
      
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        
        </table>
        </div>
        
        </tr>
        </table>
        </div>
  );
}

export default Login;