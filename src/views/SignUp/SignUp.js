import React from 'react'
import "./SignUp.css"
import { useState } from "react";
import showToast from 'crunchy-toast';

function SignUp() {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  
  function handleSubmit() {
    if (password === currentPassword) {
      showToast(" signup successfull.",'alert', 3000);
    } else {
      showToast("Password do not Match.",'alert', 3000);
  };
    const data = {
      fullname,
      email,
      password

    }
    localStorage.setItem("user", JSON.stringify(data));
  }
  return (
    <div className='signup-container'>
      <form>
        <label className="name">Name:</label>

        <input type='text'
          onChange={(e) => {
            setFullName(e.target.value)
          }}
          placeholder='full name' /><br /> <br />


        <label className="name">Email:</label>

        <input type='text'

          onChange={(e) => {
            setEmail(e.target.value)
          }} placeholder='Enter email'
        /><br /><br />
        <label className='password'>Password:</label>
        <input type='password'
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        /><br /><br />
        <label>Confirm Password:</label>
        <input type='password'
          onChange={(e) => {
            setCurrentPassword(e.target.value)
          }} /><br /><br />

      </form>
      <button onClick={handleSubmit}>submit</button>

   
    </div >
  )
}

export default SignUp;
