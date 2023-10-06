import "./AppoinmentPatientCard.css"
import React from "react"

const AppoinmentPatientCard = ({ id, patientName, city, contactNo, date, time, department, removePatientFromList ,index}) => {
    return(
        <div className="task-container">
           <p className="div-in"> {index+1}</p>
           <p className="div-in">{id}</p>
            <p className="div-in">{patientName}</p>
           <p className="div-in">{city}</p>
           <p className="div-in">{contactNo}</p>
           <p className="div-in">{time}</p>
           <p className="div-in">{department}</p>
            <p className="delete-task-icon div-in"
            onClick={() => {
                removePatientFromList(id);
            }}
            >
                🗑️</p>
                </div>

    )
}
export default AppoinmentPatientCard;