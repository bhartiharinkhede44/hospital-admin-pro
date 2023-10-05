import "./IpdPatientListCard.css"
import React from "react"

const IpdPatientListCard = ({ id, patientName, room, bedNo, removePatientFromList, setListEditable ,index}) => {
    return(
        <div className="task-container">
           <p className="div-in"> {index+1}</p>
           <p className="div-in">{id}</p>
            <p className="div-in">{patientName}</p>
            <p className="div-in">{room}</p>
           <p className="div-in">{bedNo}</p>
            <p className="delete-task-icon div-in"
            onClick={() => {
                removePatientFromList(id);
            }}
            >
                🗑️</p>

              <p className="edit-task-icon div-in"
            onClick={() => {
                setListEditable(id);
            }}
            >🖊️
            </p>
        </div>
    
    )
}
export default IpdPatientListCard