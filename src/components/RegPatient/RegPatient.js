import React from "react";
import "./RegPatient.css";

function RegPatient({
  patientname,
  gender,
  age,
  bloodgroup,
  contactnumber,
  city,
  date,
}) {
  return (
    <>
      <div className=" d-flex justify-content-center ">
        <div className="card m-2" style={{ width: "50rem" }}>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <h6>Name : {patientname}</h6>
              </div>
              <div className="col-md-3">
                <h6>Gender: {gender}</h6>
              </div>
              <div className="col-md-3">
                <h6>Age : {age}</h6>
              </div>
              <div className="col-md-2">
                <h6>{bloodgroup}</h6>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4">
                <h6>{city}</h6>
              </div>
              <div className="col-md-3">
                <h6>{date}</h6>
              </div>
              <div className="col-md-3">
                <h6>{contactnumber}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegPatient;
