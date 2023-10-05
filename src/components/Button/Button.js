import "./Button.css"
export default function Button({btnName, CustomBtn}){

    return(
        <>
        <button className={` btn-sm-rounded btn-primary fw-bold ${CustomBtn} `}>{btnName}</button>
        </>
    )

}