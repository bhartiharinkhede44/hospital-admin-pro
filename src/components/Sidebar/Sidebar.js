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

        <div className="names"> <span className="nametext1"> Super Admin </span></div> 
        <div className="sidebar-navlinks">
            <ul>
                <li>
                <i class="bi bi-house-fill">  Dashboard</i> </li>
                <li> <i class="bi bi-person-circle"></i> Department Module </li>
                <li> <i class="bi bi-person-circle"></i> user Module </li>
                <li>  <i class="bi bi-person-circle"></i> Doctor Module </li>
                <li> <i class="bi bi-person-circle"></i> Patient Module </li>
                <li> <i class="bi bi-clipboard2-check"></i> Appoinment Module </li>
                <li> <i class="bi bi-clipboard2-check"></i> Treatment Module </li>
                <li> <i class="bi bi-clipboard2-check"></i> Diagnosis Module </li>
                <li> <i class="bi bi-clipboard2-check"></i> Medicine Module </li>

            </ul>

        </div>
      
        </div>
       <div className="main"> 
       <div className="main-navbar">    <i class="bi bi-list" onClick={toggleMenu} ></i> 
       
       </div>
       <div className="main-navbar2">     </div>
   
       </div>
       
       </div>
        </>
    )
}