import "./AppoinmentHeader.css"

function AppoinmentHeader(){
    return(
        <>
        <div className="task-container-1">
        <h5 className="sr-no div-in">Sr.No</h5>
        <h5 className="div-in">Patient <br />ID</h5> 
        <h5 className="div-in">Patient <br />Name</h5> 
        <h5 className="div-in">City</h5>
        <h5 className="div-in">contact<br />No</h5>
        <h5 className="div-in">Time</h5>
        <h5 className="div-in">Department</h5>
        <h5 className="div-in">Edit</h5>
        </div>
        </>
    )
}
export default AppoinmentHeader;