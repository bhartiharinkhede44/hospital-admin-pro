import "./Footer.css"
import React from 'react'
import gmailcontact from './gmail-contact.png'

import { Link } from "react-router-dom"

function Footer() {
  return (
    <div class="text-center bg-primary text-light mt-5  p-5">
  <div class="row">
    <div class="col">
    <h4 className="">Hospital Management<br /> like Never Before.</h4>
    <p>An Innovative Healthcare IT Solution, Featuring a Web-Based Hospital Management System, Designed to Streamline Operations, Enhance Patient Care, and Improve Overall Efficiency.</p>
    </div>
    <div class="col">
        <h4>Quicks Links</h4><br/>
      <Link to ="/" className="links"> <h5>Home</h5> </Link>
       <Link to ="/contact" className="links"> <h5>Contact</h5></Link>
       <Link to="/faq" className="links"><h5>FAQ</h5></Link>
    </div>
    <div class="col">
      <h4>Contact</h4>
      <img src={gmailcontact} className="gmailcontact-img"></img><br/>
      <p>📞:+ 7821892252</p>

      
    </div>
  </div>
</div>
  )
}

export default Footer
