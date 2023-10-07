import React, { useEffect, useState } from "react";
import RegPatient from "../../components/RegPatient/RegPatient";
import Dashboard from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import add from "./../Ipd/add.png";
import "./Registration.css";

function Registration() {
  const [registerPatient, setRegisterPatient] = useState([
    {
      id: 1, // Include an initial id
      patientname: "Sakshi Mane",
      gender: "Female",
      age: 20,
      bloodgroup: "b+",
      contactnumber: "123",
      city: "Rahuri",
      date: "2015-1-dec",
    },
  ]);

  const [id, setId] = useState(0);
  const [patientname, setPatientName] = useState("");
  const [gender, setGender] = useState(""); // Correct the variable name
  const [age, setAge] = useState("");
  const [bloodgroup, setBloodGroup] = useState("");
  const [contactnumber, setContactNumber] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  // loadPatientfromLocalStorage
  useEffect(() => {
    const patient = JSON.parse(localStorage.getItem("patientlist"));

    if (patient && patient.length > 0) {
      setRegisterPatient(patient);
    }
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
      city: city,
    };

    const newRegPatientList = [...registerPatient, obj];
    setRegisterPatient(newRegPatientList);
    setCity("");
    setPatientName("");
    setGender(""); // Correct the variable name
    setBloodGroup("");
    setAge("");
    setContactNumber("");
    setDate("");

    savePatientToLocalStorage(newRegPatientList);
  };

  // Delete Task Button
  const removePatientList = (id) => {
    const updatedPatientList = registerPatient.filter(
      (patient) => patient.id !== id
    );

    setRegisterPatient(updatedPatientList);
    savePatientToLocalStorage(updatedPatientList);
  };

  // Edit Task Button
  const setTaskEditable = (id) => {
    const patientToEdit = registerPatient.find((patient) => patient.id === id);

    if (patientToEdit) {
      setId(patientToEdit.id);
      setPatientName(patientToEdit.patientname);
      setGender(patientToEdit.gender); // Correct the variable name
      setAge(patientToEdit.age);
      setBloodGroup(patientToEdit.bloodgroup);
      setContactNumber(patientToEdit.contactnumber);
      setDate(patientToEdit.date);
      setCity(patientToEdit.city);
      setIsEdit(true);
    }
  };

  // Update Task Button
  const updateTask = () => {
    const updatedPatient = {
      id: id,
      patientname: patientname,
      gender: gender,
      age: age,
      bloodgroup: bloodgroup,
      contactnumber: contactnumber,
      date: date,
      city: city,
    };

    const updatedPatientList = registerPatient.map((patient) =>
      patient.id === id ? updatedPatient : patient
    );

    setRegisterPatient(updatedPatientList);

    setId(0);
    setCity("");
    setPatientName("");
    setGender(""); // Correct the variable name
    setBloodGroup("");
    setAge("");
    setContactNumber("");
    setDate("");

    setIsEdit(false);
    savePatientToLocalStorage(updatedPatientList);
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
            <img src={add} alt="Add" />
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
                            setGender(e.target.value); // Correct the variable name
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
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
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
                      }}
                    />
                  </div>
                  <div className="col-md-4">
                    <div className="">
                      {isEdit ? (
                        <button
                          type="button"
                          className="btn-primary px-5 fw-bold mt-0"
                          onClick={updateTask}
                        >
                          Update
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn-primary px-5 fs-6 fw-bold mt-0"
                          onClick={addPatientToList}
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <hr className="hr mt-4" />
            <div className="container mt-5">
              <h1>PATIENT LIST</h1>

              {registerPatient.map((patient, index) => (
                <div key={index}>
                  <RegPatient
                    patientname={patient.patientname}
                    gender={patient.gender}
                    age={patient.age}
                    bloodgroup={patient.bloodgroup}
                    contactnumber={patient.contactnumber}
                    date={patient.date}
                    city={patient.city}
                    key={index}
                    removePatientList={() => removePatientList(patient.id)}
                    obj={registerPatient}
                    setTaskEditable={() => setTaskEditable(patient.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
