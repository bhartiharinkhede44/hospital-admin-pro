import "./PatientDetailsCard.css";
import React from "react";

export default function PatientDetailsCard({id, name , age, gender, city, contactNo,condition, bloodGroup, setListEditable ,index}){
    return(
<>

<div className="task-container">        
           <p className="div-in"> {index+1}</p>
           <p className="div-in">{id}</p>
            <p className="div-in">{name}</p>
            <p className="div-in">{age}</p>
            <p className="div-in">{gender}</p>
            <p className="div-in">{condition}</p>
           <p className="div-in">{bloodGroup}</p>
           <p className="div-in">{city}</p>
           <p className="div-in">{contactNo}</p>
       
              <p className="edit-task-icon div-in"
            onClick={() => {
                setListEditable(id);
            }}
            >🖊️<br />Edit
            </p>
</div>
</>
    )
}