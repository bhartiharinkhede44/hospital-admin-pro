import { useEffect, useState } from 'react';
import './SearchId.css';
import { list } from '../../data/patientslist';
import PatientDetailsCard from '../PatientDetailsCard/PatientDetailsCard';
import PatientHeader from '../PatientHeader/PatientHrader';

export default function SearchId(){
    const [patientList, setPatientList] = useState(list);
const [searchPatient, setPatientSearch] =useState('');

useEffect(() => {
    const filteredPatient = list.filter((patient) => {
        const name = patient.name.toLocaleLowerCase();
        const age = patient.age.toString();
        const query = searchPatient.toLowerCase();
        return (name.includes(query) || age.includes(query))

    }) 
    setPatientList(filteredPatient);
}, [searchPatient])
    return(
<>
<div className='mt-5 ms-3 d-flex justify-content-start'>
<p className='search-bar'>Search Name/ID : &nbsp;
<input 
type='text' 
placeholder='Search ' className='search' 
searchPatient={searchPatient} 
onChange={(e) => {setPatientSearch(e.target.value)}}
/></p>

</div>
<div>
   <PatientHeader />
    {patientList.map((patient, index) => {
            const {id, name , age, gender, city, contactNo, condition, bloodGroup } = patient
            
           return <PatientDetailsCard  
           index={index}
           id={id}
           name={name}
           age={age}
           gender={gender}
           city={city}
           condition={condition}
           bloodGroup={bloodGroup}
           contactNo={contactNo}
 />
        })
    }
</div>
</>
    );
}