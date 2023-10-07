import React from "react";
import "./Sidebar.css"
import { useEffect,useState } from "react";
export default function Dashboard(){
    const [issetmenu,setIssetmenu]=useState(true)
    const [classname,setClassname]=useState("sidebar-open")
   
    // function addmenuclass(){
    //     setClassname('')
    //     setIssetmenu(false)
        
    // }

    // function removemenuclas(){
    //     setClassname("sidebar-open")
    //     setIssetmenu(true)

    // }
    // issetmenu?addmenuclass:removemenuclas
    // {`sidebar ${classname}`}
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

 <div className="logo"><span className="nametext1">HospitalAdminPro</span>
 </div>
        <div className="sidebar-navlinks">
            <ul>
                <li> <i class="bi bi-person-circle"></i> Dashboard </li>
                <li> <i class="bi bi-person-circle"></i> Department Module </li>
                <li> <i class="bi bi-person-circle"></i> Doctor Module </li>
                <li>  <i class="bi bi-person-circle"></i> Appoinment </li>
                <li> <i class="bi bi-clipboard2-check"></i> Registration </li>
                <li> <i class="bi bi-clipboard2-check"></i> IPD Patients </li>
                <li> <i class="bi bi-clipboard2-check"></i> OPD Painents </li>
                <li> <i class="bi bi-clipboard2-check"></i> Prescription</li>
                <li> <i class="bi bi-clipboard2-check"></i> Services</li>

            </ul>

        </div>
      
        </div>
      
       
       </div>
        </>
    )
}
