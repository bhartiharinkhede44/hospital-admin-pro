import React from "react";
import "./Contact.css"
import Imglogo from "./image/logo.jpg"
import Imglogo2 from "./image/logo2.png"
import Imghospital from "./image/hos2.webp"
import Imgcell from "./image/cell.jpg"
import Imgemail from "./image/email.jpg"
import Imglocation from "./image/loca.jpg"
import Imgform from "./image/formimg.jpg"
import Imghos2 from "./image/hos2.jpg"
import Imgmessege from "./image/newmessege.png"
import Footer from "./../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar";
export default function Contact() {
    return (
        <>
            <div className="main-container">
                <Navbar/>
                <div className="nav-head-contact">

                   
                    <div >   <span className="nametext">  Patil Multispeciality Hospital</span> </div>
                   
                </div>

                <div>
                    <img src={Imghos2} className="third-img" />

                </div>
                <div className="con-numbers">
                    <div className="con-text2 " >
                         <i class="bi bi-telephone"></i><span className="h4">PHONE </span> 

                    </div>
                    <div className="con-text2" >
                        <h1> 24/7 Helpline</h1>
                        <h2> +91 44 4743 2350 </h2>
                    </div>
                    <div className="con-text2">
                        <h1> Emergency</h1>
                        <h1> +91 4427478000</h1>
                    </div>
                    <div className="con-text2">
                        <h1>Ambulance </h1>
                        <h1> 109876</h1>
                    </div>

                </div>

                <div className="fourth-cont">
                    <div className="con-text3">
                    <i class="bi bi-envelope-at-fill"></i> <span className="text7"> <span className="emailtext"> Email</span></span><br />
                        <p> patilgroupakrudi786@gmail.com</p>

                    </div>
                    <div className="con-text3">
                    <i class="bi bi-geo-alt-fill"></i> <span className="text7">   Address</span><br />
                        <p>
                            Patilhospital ,ambedkar chowk ,pimpri-chinchwad.
                        </p>
                    </div>

                </div>
                <div className="loca-embede">
                    <div className="form">
                        <div className="mb-3">
                            <span> <span className="cn-text1"><b>Message Us </b> </span> </span><br />

                            <label for="exampleFormControlInput1" className="form-label">Full name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="full name " />

                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="abcd@example.com" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Your messeges</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <br/>
                        <button className=" btn btn-primary"> SEND</button>

                    </div>
                    <div className="form2">
                        <img src={Imgmessege} className="img-form" />

                    </div>


                </div>
                
                    <div className="footersec">    <Footer/></div>
             

            </div>


        </>
    )
}