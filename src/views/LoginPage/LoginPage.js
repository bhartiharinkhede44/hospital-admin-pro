import "./LoginPage.css"
import React from 'react'
import { useState } from "react";
import showToast from 'crunchy-toast';

function LoginPage() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('')


  function handleLogin() {

    const local = JSON.parse(localStorage.getItem("user"))

    if (local.email === Email && local.password === Password) {
      alert('Login successfully');

    } else {
      setPassword('Invalid email password');
    }

  }


  return (
    <div className="login-container ">
      <form>
        <label className="name">Email:</label>
        <input type='email' className="input-box"
          placeholder="enter email"
          onChange={(e) => {
            setEmail(e.target.value);


          }} /><br /><br />
        <label className="name">Password:</label>
        <input type='password' className="input-box"
          placeholder="enter password"
          onChange={(e) => {
            setPassword(e.target.value);


          }} /><br /><br />
        <button onClick={handleLogin}>Login</button>


      </form>
    </div>
  )
}

export default LoginPage
