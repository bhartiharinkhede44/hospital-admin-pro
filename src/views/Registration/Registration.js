import React, { useState } from "react";
import RegPatient from "../../components/RegPatient/RegPatient";
import Button from "./../../components/Button/Button";
import Dashboard from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import add from "./../Ipd/add.png";
import "./Registration.css";
function Registration() {
  const [registerPatient, setRegisterPatient] = useState([
    {
      patientname: "Sakshi Mane",
      gender: "Female",
      age: 20,
      bloodgroup: "b+",
      contactnumber: "123",
      city: "Rahuri",
      date: "2015-1-dec",
    },
    {
      patientname: "Sakshi Mane",
      gender: "Female",
      age: 20,
      bloodgroup: "b+",
      contactnumber: "123",
      city: "Rahuri",
      date: "2015-1-dec",
    },
    {
      patientname: "Sakshi Mane",
      gender: "Female",
      age: 20,
      bloodgroup: "b+",
      contactnumber: "123",
      city: "Rahuri",
      date: "2015-1-dec",
    },
    {
      patientname: "Sakshi Mane",
      gender: "Female",
      age: 20,
      bloodgroup: "b+",
      contactnumber: "123",
      city: "Rahuri",
      date: "2015-1-dec",
    },
    {
      patientname: "Sakshi Mane",
      gender: "Female",
      age: 20,
      bloodgroup: "b+",
      contactnumber: "123",
      city: "Rahuri",
      date: "2015-1-dec",
    },
    {
      patientname: "Sakshi Mane",
      gender: "Female",
      age: 20,
      bloodgroup: "b+",
      contactnumber: "123",
      city: "Rahuri",
      date: "2015-1-dec",
    },
  ]);
  return (
    <>
      <div className="d-flex ">
        <div>
          <Dashboard />
        </div>
        <div>
          <Header />

          <div className="ipd-top-header d-flex">
            <img src={add} />
            <h1 className="heading">PATIENT REGISTRATION</h1>
          </div>

          <div className="container p-5 mt- shadow border-black  add-patient-list ">
            <form>
              <div className="full-name-container container">
                <div className="rg-header-container"></div>
                <div className="row">
                  <div className="col-md-4">
                    <input
                      type="text"
                      class="form-control"
                      id="inputtext2"
                      placeholder="PATIENT FULL NAME"
                    />
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          class="form-control"
                          id="inputtext2"
                          placeholder="Gender"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="number"
                          class="form-control"
                          id="inputtext2"
                          placeholder="Age"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          class="form-control"
                          id="inputtext2"
                          placeholder="Blood Group"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          class="form-control"
                          id="inputtext2"
                          placeholder="City"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <input
                      type="number"
                      class="form-control"
                      id="inputtext2"
                      placeholder="Contact Number"
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="date"
                      class="form-control"
                      id="inputtext2"
                      placeholder=""
                    />
                  </div>
                  <div className="col-md-4">
                    <Button
                      btnName={"Add Patient"}
                      CustomBtn={"btn btn-primary px-5 mt-1"}
                    />
                  </div>
                </div>
              </div>
            </form>
            <hr className="hr mt-4" />
            <div className="container mt-5">
              <h1>REGISTRATION PATIENT</h1>

              {registerPatient.map((patient, i) => {
                const {
                  patientname,
                  gender,
                  age,
                  bloodgroup,
                  contactnumber,
                  city,
                  date,
                } = patient;
                return (
                  <div>
                    <RegPatient
                      key={i}
                      patientname={patientname}
                      gender={gender}
                      age={age}
                      bloodgroup={bloodgroup}
                      contactnumber={contactnumber}
                      city={city}
                      date={date}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
