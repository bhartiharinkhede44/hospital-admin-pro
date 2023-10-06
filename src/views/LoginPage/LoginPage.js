import "./LoginPage.css"
import React from 'react'
import { useState } from "react";
import showToast from 'crunchy-toast';

function LoginPage() {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const data = {
    Email,
    password

  }
  function handleLogin() {
    
    localStorage.getItem('user', JSON.parse(data));
  }
  

  return (
    <div className="login-container ">
      <form>
        <label className="name">Email:</label>
        <input type='email' className="input-box"
          placeholder="enter email"
          onChange={(e) => {
            setEmail(e.target.value);
            localStorage.setItem('user', Email);

          }} /><br /><br />
        <label className="name">Password:</label>
        <input type='password' className="input-box"
          placeholder="enter password"
          onChange={(e) => {
            setPassword(e.target.value);
            localStorage.setItem('user', password);

          }} /><br /><br />
        <button onClick={handleLogin}>Login</button>


      </form>
    </div>
  )
}

export default LoginPage
