import React from "react";
import "./RegPatient.css";

function RegPatient({
  id,
  patientname,
  gender,
  age,
  bloodgroup,
  contactnumber,
  city,
  date,
  removePatientList,
  setTaskEditable,
}) {
  return (
    <>
      <div className=" d-flex justify-content-center ">
        <div className="card shadow m-2" style={{ width: "50rem" }}>
          <div className="card-body  rg-patient-card">
            <div className="row">
              <div className="col-md-4">
                <h6>
                  <i class="fa-solid fa-user"></i> {patientname}
                </h6>
              </div>
              <div className="col-md-3">
                <h6>Gender: {gender}</h6>
              </div>
              <div className="col-md-3">
                <h6>Age : {age}</h6>
              </div>
              <div className="col-md-2">
                <h6>
                  <i class="fa-solid fa-droplet"></i> {bloodgroup}
                </h6>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4">
                <h6>
                  <i class="fa-solid fa-city"></i> {city}
                </h6>
              </div>
              <div className="col-md-3">
                <h6>
                  <i class="fa-solid fa-calendar-days"></i> {"   "}
                  {date}
                </h6>
              </div>
              <div className="col-md-3">
                <h6>
                  {" "}
                  <i class="fa-solid fa-phone"></i> {contactnumber}
                </h6>
              </div>
              <div className="col-md-2">
                <span
                  className="delet-icon"
                  onClick={() => {
                    removePatientList(id);
                  }}
                >
                  <i class="fa-solid fa-trash"></i>
                </span>
                <span
                  className="update-icon cusror-pointer"
                  onClick={() => {
                    setTaskEditable(id);
                  }}
                >
                  <i class="fa-solid fa-pen-to-square"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegPatient;
