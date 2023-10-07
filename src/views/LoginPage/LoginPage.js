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
      showToast(" login successfull.",'success', 3000);

    } else {
      showToast("Password do not Match.",'alert', 3000);
    }

  }


  return (
    <div className="main-login-container d-flex ">
      <div className="side-container-login"></div>
      <div className="login-container">
      <form>
        <label className="name">User Name:</label>
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
    </div>
  )
}

export default LoginPage
