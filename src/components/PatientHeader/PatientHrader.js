import "./PatientHeader.css"

function PatientHeader(){
    return(
        <>
        <div className="task-container-1">
        <h5 className="sr-no div-in">Sr.No</h5>
        <h5 className="div-in">Patient <br />ID</h5> 
        <h5 className="div-in">Patient <br />Name</h5> 
        <h5 className="div-in">Age</h5>
        <h5 className="div-in">Gender</h5>
        <h5 className="div-in">Diagnosis</h5>
        <h5 className="div-in">Blood <br />Group</h5>
        <h5 className="div-in">City</h5>
        <h5 className="div-in">contact<br />No</h5>
        <h5 className="div-in">Activity</h5>
       
        </div>
        </>
    )
}
export default PatientHeader;