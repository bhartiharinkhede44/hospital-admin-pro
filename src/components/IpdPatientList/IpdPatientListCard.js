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
            <p className="delete-task-icon"
            onClick={() => {
                removeTaskFromList(id);
            }}
            >
                Remove</p>

              <p className="edit-task-icon"
            onClick={() => {
                setTaskEditable(id);
            }}
            >Edit
            </p>
        </div>
    )
}
export default IpdPatientListCard