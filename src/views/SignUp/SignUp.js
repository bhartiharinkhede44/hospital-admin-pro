import React from 'react'
import "./SignUp.css"
import { useState } from "react";
import showToast from 'crunchy-toast';
import { Link } from "react-router-dom";


function SignUp() {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');


  function handleSubmit() {

    if (!fullname || !email || !password || !hospitalName || !currentPassword) {
   
    };


    if (password === currentPassword) {
      showToast(" login successfull.",'success', 3000);
    } else {
      showToast("Password do not Match.", 'alert', 3000);
    };
    const data = {
      fullname,
      email,
      hospitalName,
      password

    }
    localStorage.setItem("user", JSON.stringify(data));
    

  }
  return (
    <div className='main d-flex'>
      <div className='signup-container'>
        <form>
          <h1 className='hea-color'>Sign up</h1>
          <label className="name">Name:</label><br />

          <input type='text' className='inputset'
            onChange={(e) => {
              setFullName(e.target.value)
            }}
            placeholder='full name' required /><br /> <br />


          <label className="name">Email:</label><br />

          <input type='text' className='inputset'

            onChange={(e) => {
              setEmail(e.target.value)
            }} placeholder='Enter email' required
          /><br /><br />
          <label className="name">Hospital Name:</label><br />

          <input type='text' className='inputset'

            onChange={(e) => {
              setHospitalName(e.target.value)
            }} placeholder='Enter hospital name' required
          /><br /><br />
          <label className="name">Password:</label><br />
          <input type='password' className='inputset' required
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          /><br /><br />
          <label className="name">Confirm Password:</label><br />
          <input type='password' className='inputset' required
            onChange={(e) => {
              setCurrentPassword(e.target.value)
            }} /><br /><br />

          <Link to="/dashboard"><button onClick={handleSubmit} className='btnsubmit'>SUBMIT</button></Link>
          <p className='text'>Already a member ? <Link to="/login" className='link-login'>Log In</Link></p>
        </form>
      </div>

      <div className='page'>

      </div>


    </div >
  )
}

export default SignUp;
