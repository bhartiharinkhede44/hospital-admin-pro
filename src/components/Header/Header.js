import "./Header.css"
import Logout from './logout.png'
import { Link } from "react-router-dom";
import Profile from './profile.png'
export default function Header() {
   
    return(
        <>
        <div className="header">
            <h4 className="btn-log-out fs-5">FAQ</h4>
        <Link to="/" className="log"> <h4 className="btn-log-out fs-5">Logout<img src={Logout} className="png-log-out"/></h4></Link>
        <Link to="/dashBoard"><img src={Profile} /></Link>
        </div>
        </>
    )
   
}
























{/* <div className="header">
<i class="bi bi-list" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"></i>
<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Hospita Admin</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div className="names"> <span className="nametext1"> Super Admin </span></div>
        <div className="sidebar-navlinks">
            <ul>
               
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
</div>
</div> */}
