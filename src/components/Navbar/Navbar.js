import "./Navbar.css";
import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary p-3">
  <div className="container-fluid ">
    <a className="navbar-brand text-light fs-2" href="#">Hospital-Admine-Pro</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
        <li className="nav-item ">
          <Link className="nav-link active text-light fs-5 ms-5" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light fs-5 ms-3" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light fs-5 ms-3" href="#">Contact</a>
        </li>
      </ul>
      <Link to="/signup"><p className="loginbtn fs-5">Sign Up</p></Link>
      <Link to="/login"> <p className="loginbtn1 fs-5">login</p></Link>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
