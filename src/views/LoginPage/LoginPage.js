import "./LoginPage.css"
import React from 'react'
import { useState } from "react";

function LoginPage() {
    const [fullname,setFullName]=useState('');

  return (
    <div className="login-container ">
      <form>
        <label className="name">Name:</label>
        <input type='text' className="input-box"
        placeholder="Full name"
        onChange={(e) =>{
            setFullName(e.target.value);
            localStorage.setItem('name',fullname );
            
        }} value={fullname}/>
        
      </form>
    </div>
  )
}

export default LoginPage
