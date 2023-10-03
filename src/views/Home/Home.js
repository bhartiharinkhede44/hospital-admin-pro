import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import React from 'react'
import DoctorImg from "./Doctors-bro.png";
import Card from "../../components/Card/Card";
import AppointmentImage from "./Image/calender.png"
import DoctormImage from "./Image/doctor.png"
import InpatientImage from "./Image/ip.png"
import OutPatientImage from "./Image/Opd.png"
import BedImage from "./Image/bed.png"
import LabImage from "./Image/lab.png"
import PharmacyImage from "./Image/pharmacy.png"
import BillImage from "./Image/billing.png"






function Home() {
    return (
        <div className="main-container ">
            <Navbar />
            <div class="row mt-5 ms-5">
                <div class="col ms-5">
                    <h1 className="headline"> Hospital Management<br /> like Never Before.</h1>
                    <p>Introducing our groundbreaking healthcare IT solution, a Web-Based Hospital Management System. This innovative platform streamlines operations, elevates patient care, and enhances overall efficiency for healthcare facilities. Experience the future of healthcare management with us.</p>
                </div>
                <div class="col mt-1">
                    <img src={DoctorImg} className="doctor-image" />
                </div>
            </div>
            <h1 className="featurehead">Features</h1>
            <div class="row">
                <div class="col ms-5">
                   <Card image={AppointmentImage} title="APPOINTMENT MANAGEMENT" text="Allow patients to book appointments online and manage them with ease"/>
                </div>
                <div class="col">
                <Card image={DoctormImage} title="DOCTOR MANAGEMENT" text="Manage doctors profile, their availiability and appointments."/>
                
                </div>
            </div>
            <div class="row">
                <div class="col ms-5">
                   <Card image={InpatientImage} title="APPOINTMENT MANAGEMENT" text="Allow patients to book appointments online and manage them with ease"/>
                </div>
                <div class="col">
                <Card image={OutPatientImage} title="DOCTOR MANAGEMENT" text="Manage doctors profile, their availiability and appointments."/>
                
                </div>
            </div>
            <div class="row">
                <div class="col ms-5">
                   <Card image={BedImage} title="APPOINTMENT MANAGEMENT" text="Allow patients to book appointments online and manage them with ease"/>
                </div>
                <div class="col">
                <Card image={LabImage } title="DOCTOR MANAGEMENT" text="Manage doctors profile, their availiability and appointments."/>
                
                </div>

            </div>
            <div class="row">
                <div class="col ms-5">
                   <Card image={PharmacyImage} title="APPOINTMENT MANAGEMENT" text="Allow patients to book appointments online and manage them with ease"/>
                </div>
                <div class="col">
                <Card image={BillImage} title="DOCTOR MANAGEMENT" text="Manage doctors profile, their availiability and appointments."/>
                
                </div>
                
            </div>



        </div>




    )
}

export default Home
