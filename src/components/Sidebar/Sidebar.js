import React from "react";
import "./Sidebar.css"
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import dash from './dashboard.png';
import dept from './department.png';
import doctor from './doctor.png';
import app from './appointment.png';
import reg from './registration.png';
import ipd from './ipd.png';
import opd from './opd.png';
import details from './details.png';
import service from './service.png';
import logo from './logo1.jpg';
import logobg from "./logo1-removebg-preview.png"

export default function Dashboard(){
    const [issetmenu,setIssetmenu]=useState(true)
    const [classname,setClassname]=useState("sidebar-open")
   
   
    let isSidebarOpen = true;
    function toggleMenu(){
        isSidebarOpen=!isSidebarOpen;
        const sidebar = document.getElementById("menu");
        const sidebarClassname = isSidebarOpen ? "sidebar-open" : "sidebar-close";
        sidebar.className= `sidebar ${sidebarClassname}`
    }
    return(
        <>
        
       <div className="wrap"> 
       <div className= " sidebar sidebar-open" id="menu">

 <div className="logo">
<img src={logobg} className="logo-img"/>
    <span className="nametext1">Patil Multispeciality &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Hospital</span>
    
 </div>
        <div className="sidebar-navlinks">
            <ul className="list">
               <Link to="/dashBoard" className="text"><li><img src={dash} className="icon"  alt=""/> Dashboard </li></Link>
               <Link to="/deparment" className="text"><li><img src={dept} className="icon"  alt="" />Department Module </li></Link>
               <Link to="/doctormodule" className="text"><li><img src={doctor} />Doctor Module </li></Link>
               <Link to="/appoinment" className="text"><li><img src={app} className="icon"  alt=""/>Appoinment </li></Link>
               <Link to="/registartion" className="text"><li><img src={reg} className="icon"  alt="" />Registration </li></Link>
               <Link to="/ipd" className="text"><li><img src={ipd} className="icon"  alt="" />IPD Patients </li></Link>
               <Link to="/opd" className="text"><li><img src={opd} className="icon"  alt=""/>OPD Painents </li></Link>
               <Link to="/patientdetail" className="text"><li><img src={details} className="icon"  alt=""/>Patient Details</li></Link>
               <Link to="/service" className="text"><li><img src={service} className="icon"  alt=""/>Services</li></Link>

            </ul>

        </div>
        </div>
      
       
       </div>
        </>
    )
}
