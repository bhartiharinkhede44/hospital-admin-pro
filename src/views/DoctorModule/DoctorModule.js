import React from "react";
import "./DoctorModule.css";
import Dashboard from './../../components/Sidebar/Sidebar';
import Header from './../../components/Header/Header';
import { Doctorinfo } from "../../data/doctorinfo";
import imghospital from "./../../views/DashBoard/hospital.png"
import doctor from "./../../data/doctor.json"
export default function DoctorModule(){

    return(
      <>
      <div className=" doctor-conatiner d-flex">
        <div><Dashboard /></div>
        <div className="dctor-conatiner">
            <Header/>
            <div className='top-header-on-dashboard' style={{ backgroundColor: doctor.theme.accentColor }}>
                <div className='d-flex'><img src={imghospital} className='img-hospital' />
                    <div>
                    <h3 className='text-start' style={{ color: doctor.theme.primaryColor }}>{doctor.title}</h3>
                    <p className='feture-text'>{doctor.text}</p>
                    </div>
                </div>
            </div>

            <div className="doctor-main-con">
                <div className="conatiner-bodypart">
                  {
                    Doctorinfo.map( (doctordata)=>{
                        const { id ,name ,speciality, degree ,age,image } = doctordata;
                        return(
                          <>
                            <div className="cardcontainer">
                               
                                <div class="box-doct">
            
                                      <p> <span className="text2">Id : </span> <span className="text"> {id} </span> </p>
                                      <p> <span className="text2"> Name :</span>   <span className="text">  {name} </span> </p>
                                      <p> <span className="text2"> speciality :</span>   <span className="text"> {speciality} </span>   </p>
                                      <p>  <span className="text2"> age:  </span>  <span className=" text">{age} </span> </p>
                                      <p> <span className="text2"> degree : </span>    <span className=" text">{degree} </span></p>
                                      <img  src={image} class="imgdoc"/> 
             
                                 </div>
                               
                            </div>

                          </>
                        )
                    }

                    )
                  }

                </div>
            </div>


        </div>

      </div>
      
      </>

        )
}
    
