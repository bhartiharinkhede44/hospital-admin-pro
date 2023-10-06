import React from "react";
import "./Contact.css"
import Imglogo from "./image/logo.jpg"
import Imglogo2 from "./image/logo2.png"
import Imghospital from "./image/hos2.webp"
import Imgcell from "./image/cell.jpg"
import Imgemail from "./image/email.jpg"
import Imglocation from "./image/loca.jpg"
import Imgform from "./image/formimg.jpg"
import Imghosp from "./image/hosp2.jpg"
import Footer from "./../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar";
export default function Contact() {
    return (
        <>
            <div className="main-container">
                <Navbar/>
                <div className="nav-head-contact">

                    <div >  <img src={Imglogo} alt="logo" className="con-logo" /> </div>
                    <div >   <b><span className="nametext">  PATIL GROUP OF  HOSPITAL</span> </b></div>
                    <div>  <img src={Imglogo2} alt="logo" className="con-logo" /> </div>
                </div>

                <div>
                    <img src={Imghosp} className="third-img" />

                </div>
                <div className="con-numbers">
                    <div className="con-text2 " >
                        <img src={Imgcell} className="cell" /> <span className="h4">PHONE </span> 

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
                        <img src={Imgemail} className="third-logo" /> <span className="text7"> EMAIL</span><br />
                        <p> patilgroupakrudi786@gmail.com</p>

                    </div>
                    <div className="con-text3">
                        <img src={Imglocation} className="third-logo" />  <span className="text7">   Address</span><br />
                        <p>
                            Patilhospital ,ambedkar chowk ,pimpri-chinchwad.
                        </p>
                    </div>

                </div>
                <div className="loca-embede">
                    <div className="form">
                        <div class="mb-3">
                            <span> <span className="cn-text1"><b>Message Us </b> </span> </span><br />

                            <label for="exampleFormControlInput1" class="form-label">Full name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="full name " />

                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Your messeges</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div><br/>
                        <button className=" btn btn-primary"> SEND</button>

                    </div>
                    <div className="form2">
                        <img src={Imgform} className="img-form" />

                    </div>


                </div>
               

              <Footer/>

            </div>


        </>
    )
}