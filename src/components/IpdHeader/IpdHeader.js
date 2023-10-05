import "./IpdHeader.css"

function IpdHeader(){
    return(
        <>
        <div className="task-container-1">
        <h5 className="sr-no div-in">Sr.No</h5>
        <h5 className="div-in">Patient <br />ID</h5> 
        <h5 className="div-in">Patient <br />Name</h5> 
        <h5 className="div-in">Room</h5>
        <h5 className="div-in">Bed <br />No</h5>
        <h5 className="div-in">Remove <br />Patient</h5>
        <h5 className="div-in">Edit</h5>
        </div>
        </>
    )
}
export default IpdHeader;