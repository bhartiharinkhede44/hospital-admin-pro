import "./IpdPatientListCard.css"
import React from "react"

const IpdPatientListCard = ({srNo, id, patientName, room, bedNo, removePatientFromList, setListEditable}) => {
    return(
        <div className="task-container">
           <p className="div-in"> {srNo}</p>
           <p className="div-in">{id}</p>
            <p className="div-in">{patientName}</p>
            <p className="div-in">{room}</p>
           <p className="div-in">{bedNo}</p>
            <p className="delete-task-icon div-in"
            onClick={() => {
                removePatientFromList(id);
            }}
            >
                Remove</p>

              <p className="edit-task-icon div-in"
            onClick={() => {
                setListEditable(id);
            }}
            >Edit
            </p>
        </div>
    
    )
}
export default IpdPatientListCard