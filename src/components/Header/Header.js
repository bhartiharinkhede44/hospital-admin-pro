import "./Header.css"

export default function Header(){
    let isSidebarOpen = true;
    function toggleMenu(){
        isSidebarOpen=!isSidebarOpen;
        const sidebar = document.getElementById("menu");
        const sidebarClassname = isSidebarOpen ? "sidebar-open" : "sidebar-close";
        sidebar.className= `sidebar ${sidebarClassname}`
    }
    return(
        <>
        <div className="header">
        <i class="bi bi-list" onClick={toggleMenu} ></i> 
        </div>
        </>
    )
}