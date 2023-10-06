import React, { useState } from "react";
import RegPatient from "../../components/RegPatient/RegPatient";
import Button from "./../../components/Button/Button";

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
      <div className="container p-5 mt-5 shadow border-black ">
        <form>
          <div className="full-name-container container">
            <div className="rg-header-container">
              <h1 className="mb-4">
                {" "}
                <i class="fa-regular fa-address-card"></i> PATIENT REGISTRATION{" "}
              </h1>
            </div>
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
        <div className="container mt-4">
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
    </>
  );
}

export default Registration;
