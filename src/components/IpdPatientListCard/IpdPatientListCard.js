import "./IpdPatientListCard.css"
import React from "react"

const IpdPatientListCard = ({srNo, id, patientName, room, bedNo, removeTaskFromList, setTaskEditable}) => {
    return(
        <div className="task-container">
           <p> {srNo}</p>
           <p>{id}</p>
            <p>{patientName}</p>
            <p>{room}</p>
           <p>{bedNo}</p>
            <span className="delete-task-icon"
            onClick={() => {
                removeTaskFromList(id);
            }}
            >Remove Patient</span>

              <span className="edit-task-icon"
            onClick={() => {
                setTaskEditable(id);
            }}
            >Edit
            </span>
        </div>
    )
}
export default Task