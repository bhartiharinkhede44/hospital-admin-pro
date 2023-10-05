import "./OpdPatientListCard.css"
import React from "react"

const OpdPatientListCard = ({ id, patientName, age, city, bloodGroup,  contactNo,removePatientFromList, setListEditable, index}) => {
    return(
        <div className="task-container">        
           <p className="div-in"> {index+1}</p>
           <p className="div-in">{id}</p>
            <p className="div-in">{patientName}</p>
            <p className="div-in">{age}</p>
           <p className="div-in">{bloodGroup}</p>
           <p className="div-in">{city}</p>
           <p className="div-in">{contactNo}</p>
           <div className="activity-div"> 
            <span className="delete-task-icon div-edit"
            onClick={() => {
                removePatientFromList(id);
            }}
            >
                🗑️</span>
           <span  className="div-edit" onClick={() => {
                setListEditable(id);
            }}
            >🖊️
            </span></div>
        </div>
    
    )
}
export default OpdPatientListCard;