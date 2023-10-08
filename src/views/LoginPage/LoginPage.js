import "./LoginPage.css"
import React from 'react'
import { useState } from "react";
import showToast from 'crunchy-toast';
import { Link } from "react-router-dom";

function LoginPage() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');


  function handleLogin() {

  //   const local = JSON.parse(localStorage.getItem("user"))
    
  //   if (local.email === Email && local.password === Password) {
  //     showToast(" login successfull.",'success', 3000);
  //     window.location.pathname()

  //   } else {
  //     showToast("Password do not Match.",'alert', 3000);
  //   }

  }


  return (
    <div className="main-login-container d-flex ">
     
      <div className="login-container">
      <form>
        <h1 className="login">Login</h1>
        <label className="name">User Name:</label><br />
        <input type='email' className="inputbox-login"
          placeholder="enter email" required
          onChange={(e) => {
            setEmail(e.target.value);


          }} /><br /><br />
        <label className="name">Password:</label><br />
        <input type='password' className="inputbox-login"
          placeholder="enter password"required
          onChange={(e) => {
            setPassword(e.target.value);


          }} /><br /><br />
           <input type="checkbox" className="checkbox" required/>Remember Me <br/>
           <Link to="/dashboard"><button onClick={handleLogin} className="loginbttn">Login</button></Link>

        <p className='text'> New User then ? <Link to="/signup" className='link-login'>SignUp</Link></p>
      </form>
      </div>
    </div>
  )
}

export default LoginPage
