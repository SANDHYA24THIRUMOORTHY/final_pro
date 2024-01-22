import React, { useState, useContext } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { UserContext } from './UserContext';

const Loureq = () => {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(null);
  const [signupDetails, setSignupDetails] = useState({ 
    name1: "",
    dob1: "",
    gender1: "",
    aadharno1: "",
    accno1: "",
    contact1: "",
    email1: "",
    nation1: "",
    state1: "",
    address1: "",
    ty: "",
    amt: "",
    pur: "",

   });
   
   const { setUser } = useContext(UserContext); 

  const checkUserExists = async (username) => {
      const response = await axios.get('');
      return response.data.some(user => user.username === username);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const userExists = await checkUserExists(signupDetails.username);
    if (userExists) {
      console.log('User already exists. Redirecting to login...');
      navigate('/');
      return;
    }

    if (confirm !== signupDetails.password){
      alert('Password and Confirm Password are not same...')
      return;
    }

    axios.post('', signupDetails)
      .then(response => {
        console.log('Signup successful:', response.data);
        setUser(response.data);
        navigate('/');
      })
      .catch(error => {
        console.error('Signup error:', error);
      });
  };

  const handleInputChange = (e) => {
    // alert(e.target.name);
    setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };

  const handleConfirmPassword = (e) => {
    setConfirm(e.target.value);
  };

  return (
    <div className='wholee'>
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
    <div >
      <form onSubmit={handleSignup} className='regi'>
      <br></br>
      <h2 className='mi'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LOU REQUEST</h2>

        <table>
          <tbody>
            <tr>
              <td className='zi'><b>NAME :</b></td>
              <td>
                <input
                  type="text"
                  name="name1"
                  placeholder='name in aadhar card'
                  value={signupDetails.name1}
                  onChange={handleInputChange}
                  required
                  className='hj'
                />
              </td>
            </tr>
            <tr>
              <td className='zi'><b>DOB :</b></td>
              <td>
                <input
                  type="date"
                  name="dob1"
                  value={signupDetails.dob1}
                  onChange={handleInputChange}
                  required
                  className='hj'
                />
              </td>
            </tr>

            <tr>
              <td className='zi'><b>GENDER :</b></td>
              <td>
                  <select name="gender1" onChange={handleInputChange}>
                    <option></option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                    <option value="OTHERS">OTHERS</option>
                  </select>
              </td>
            </tr>

            <tr>
              <td className='zi'><b>AADHAR NUMBER :</b></td>
              <td>
                <input
                    type="number"
                    name="aadharno1"
                    placeholder='aadhar no'
                  value={signupDetails.aadharno1}
                  onChange={handleInputChange}
                    required
                    className='hj'
                />
              </td>
            </tr>

            <tr>
              <td className='zi'><b>ACCOUNT NUMBER :</b></td>
              <td>
                <input
                    type="number"
                    name="accno1"
                    placeholder='account no'
                  value={signupDetails.accno1}
                  onChange={handleInputChange}
                    required
                    className='hj'
                />
              </td>
            </tr>

            <tr>
              <td className='zi'><b>MOBILE NUMBER :</b></td>
              <td>
                <input
                  type="tel"
                  name="contact1"
                  placeholder='mobile no'
                  value={signupDetails.contact1}
                  onChange={handleInputChange}
                  pattern="[0-9]{10}"
                  required
                  className='hj'
                />
              </td>
            </tr>
            
            <tr>
            <td className='zi'><b>EMAIL :</b></td>
            <td>
            <input
            type="email"
            name="email1"
            placeholder='mail id'
            value={signupDetails.email1}
            onChange={handleInputChange}
            required
            className='hj'
            />
            </td>
            </tr>
            
            <tr>
            <td className='zi'><b>NATIONALITY :</b></td>
            <td>
            <input
            type="text"
            name="nation1"
            value={signupDetails.nation1}
            onChange={handleInputChange}
            required
            className='hj'
            />
            </td>
            </tr>
            <tr>
            <td className='zi'><b>STATE:</b></td>
            <td>
            <input
            type="text"
            name="state1"
            value={signupDetails.state1}
            onChange={handleInputChange}
            required
            className='hj'
            />
            </td>
            </tr>
            <tr>
            <td className='zi'><b>ADDRESS :</b></td>
            <td>
            <input
            type="text"
            name="address1"
            placeholder='door no, area, city, state'
            value={signupDetails.address1}
            onChange={handleInputChange}
            required
            className='hj'
            />
            </td>
            </tr>
            
            
            <tr>
            <td className='zi'><b>LOAN TYPE :</b></td>
            <td>
            <input
            type="text"
            name="ty"
            placeholder='type of loan'
            value={signupDetails.ty}
            onChange={handleInputChange}
            required
            className='hj'
            />
            </td>
            </tr>


            <tr>
              <td className='zi'><b>LOAN AMOUNT :</b></td>
              <td>
                <input
                  type="tel"
                  name="amt"
                  placeholder='amount in digits'
                  value={signupDetails.amt}
                  onChange={handleInputChange}
                  pattern="[0-9]{10}"
                  required
                  className='hj'
                />
              </td>
            </tr>

   
            <tr>
              <td className='zi'><b>PURPOSE :</b></td>
              <td>
                <input
                    type="text"
                    name="pur"
                    placeholder='reason for loan'
                  value={signupDetails.pur}
                  onChange={handleInputChange}
                    required
                    className='hj'
                />
              </td>
            </tr>

   
            <tr>
                <td colSpan="2" style={{ textAlign: 'center' }}>
                  <Link to="/loudoc">
                  <button type="submit" className='bt'>Next Page</button>
                  </Link>
                </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Loureq;