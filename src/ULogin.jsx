import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext'; // Import UserContext
import './ULogin.css';

function ULogin() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: ''
  });
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    axios.get('https://65a770fd94c2c5762da6a8fc.mockapi.io/reg')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUsers = users.filter(user => user.username === loginDetails.username);
    
    // console.log(foundUsers);

    if (foundUsers.length > 0) {
      setUser(foundUsers[0]);
      navigate('/sidebar')
    } else {
      alert('Account not found please register')
      navigate('/ureg')
    }
  };

  const handleInputChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className='who'>
      <div >
      <div style={{ maxWidth: '400px', margin: 'auto' }}>
       <form onSubmit={handleLogin}>
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LOGIN</h2><br></br>
          <label className='color'>
            <b>USERNAME :</b>
            <input
              type="text"
              name="username"
              value={loginDetails.username}
              onChange={handleInputChange}
              className='hj'
            />
          </label>
          <br />
          <br></br>
          <label className='color'>
           <b> PASSWORD :</b>
            <input
              type="password"
              name="password"
              value={loginDetails.password}
              onChange={handleInputChange}
              className='hj'
            />
          </label>
          <br />
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit">Login</button>
          <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Don't have an account</h5>
          <br>
          </br>
          <br></br>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/ureg"><button>Register</button></Link>
        </form>

        <br></br>
        
      </div>
       
        </div>
      
      </div>
  )
}


export default ULogin;