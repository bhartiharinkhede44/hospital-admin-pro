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
import Footer from "../../components/Footer/Footer";


function Home() {
    return (
        <div className="main-container ">
            <Navbar />

            <div class="row mt-5 ms-5">
                <div class="col ms-5">
                    <h1 className="headline mt-5"> Hospital Management<br /> like Never Before.</h1>
                    <p className="subhead mt-5">Introducing our groundbreaking healthcare IT solution, a Web-Based Hospital Management System. This innovative platform streamlines operations, elevates patient care, and enhances overall efficiency for healthcare facilities. Experience the future of healthcare management with us.</p>
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
                   <Card image={InpatientImage} title="IN-PATIENT MANAGEMENT" text="Manage records of in-patients along with their general, admission details, bed number and case scenario."/>
                </div>
                <div class="col">
                <Card image={OutPatientImage} title="OUT-PATIENT MANAGEMENT" text="Manage records in-patients along with the services received, payments made and lab reports."/>
                
                </div>
            </div>
            <div class="row">
                <div class="col ms-5">
                   <Card image={BedImage} title="BED MANAGEMENT" text="Manage the bed located in different floors and allocate the unique bed number for each patient."/>
                </div>
                <div class="col">
                <Card image={LabImage } title="LABORATORY MANAGEMENT" text="Keep detailed records of different tests performed on each patient."/>
                
                </div>

            </div>
            <div class="row">
                <div class="col ms-5">
                   <Card image={PharmacyImage} title="PHARMACY MANAGEMENT" text="Keep track of medicine stock and medicine prescribed to each patient."/>
                </div>
                <div class="col">
                <Card image={BillImage} title="BILLINGS" text="Manage all transactions related to paymens and invoices."/>
                
                </div>
                
            </div>

            <Footer/>
           
        
        </div>
        




    )
}

export default Home
