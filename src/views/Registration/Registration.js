import React, { useEffect, useState } from "react";
import RegPatient from "../../components/RegPatient/RegPatient";
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
  ]);
  const [patientname, setPatientName] = useState("");
  const [gender, setGneder] = useState("");
  const [age, setAge] = useState("");
  const [bloodgroup, setBloodGroup] = useState("");
  const [contactnumber, setContactNumber] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");

  // loadPatientfromLocalStorage
  useEffect(() => {
    const patient = JSON.parse(localStorage.getItem("patientlist"));
    setRegisterPatient(patient);
  }, []);

  // savePatientToLocalStorage
  const savePatientToLocalStorage = (patients) => {
    localStorage.setItem("patientlist", JSON.stringify(patients));
  };

  // add addPatientToList
  const addPatientToList = () => {
    const randomId = Math.floor(Math.random() * 1000);

    const obj = {
      id: randomId,
      patientname: patientname,
      gender: gender,
      age: age,
      bloodgroup: bloodgroup,
      contactnumber: contactnumber,
      date: date,
    };

    const newRegPatientList = [...registerPatient, obj];
    setRegisterPatient(newRegPatientList);
    setCity("");
    setPatientName("");
    setGneder("");
    setBloodGroup("");
    setAge("");
    setContactNumber("");
    setDate("");

    savePatientToLocalStorage(newRegPatientList);
  };

  // Delete Task Button
  const removePatientList = (id) => {
    let index;
    registerPatient.forEach((task, i) => {
      if (task.id === id) {
        index = i;
      }
    });

    const tempArray = registerPatient;
    tempArray.splice(index, 1);

    setRegisterPatient([...tempArray]);
    savePatientToLocalStorage(tempArray)

  };

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
            <h1 className="heading">PATIENT REGISTRATION {city}</h1>
          </div>

          <div className="container p-5 mt- shadow border-black  add-patient-list ">
            <form>
              <div className="full-name-container container">
                <div className="rg-header-container"></div>
                <div className="row">
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      id="inputtext2"
                      placeholder="PATIENT FULL NAME"
                      value={patientname}
                      onChange={(e) => {
                        setPatientName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          id="inputtext2"
                          placeholder="Gender"
                          value={gender}
                          onChange={(e) => {
                            setGneder(e.target.value);
                          }}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="number"
                          className="form-control"
                          id="inputtext2"
                          placeholder="Age"
                          value={age}
                          onChange={(e) => {
                            setAge(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          id="inputtext2"
                          placeholder="Blood Group"
                          value={bloodgroup}
                          onChange={(e) => {
                            setBloodGroup(e.target.value);
                          }}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          id="inputtext2"
                          placeholder="City"
                          value={city}
                          onChange={(e) => {
                            setCity(e.target.value);
                            console.log(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <input
                      type="number"
                      className="form-control"
                      id="inputtext2"
                      placeholder="Contact Number"
                      value={contactnumber}
                      onChange={(e) => {
                        setContactNumber(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="date"
                      className="form-control"
                      id="inputtext2"
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                        console.log(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-4">
                    <button
                      type="button"
                      btnName={"Add Patient"}
                      className="btn-primary px-5 fw-bold mt-0"
                      onClick={addPatientToList}
                    >
                      Add Patient
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <hr className="hr mt-4" />
            <div className="container mt-5">
              <h1>REGISTRATION PATIENT</h1>

              {registerPatient.map((patient, index) => {
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
                      patientname={patientname}
                      gender={gender}
                      age={age}
                      bloodgroup={bloodgroup}
                      contactnumber={contactnumber}
                      date={date}
                      key={index}
                      removePatientList={removePatientList}
                      obj={registerPatient}
                      city={city}
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
