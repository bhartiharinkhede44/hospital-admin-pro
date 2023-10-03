import React, { useEffect, useState } from 'react';
import  {ipdpatientlist}  from '../../data/ipdpatientlist';
import IpdPatientListCard from './../../components/IpdPatientList/IpdPatientListCard'
import IpdHeader from './../../components/IpdHeader/IpdHeader'
import "./Ipd.css"


function Ipd() {
 const [patients, setPatients] = useState(ipdpatientlist);
 const [searchTerm, setSearchTerm] = useState('')

 useEffect(() => {
  const filteredPatients = ipdpatientlist.filter((patient) => {
    const name = patient.patientName.toLocaleLowerCase();
    const mobile = patient.id.toString();
    const query = searchTerm.toLowerCase();
    return (name.includes(query) || mobile.includes(query))
  })

  setPatients(filteredPatients);
 }, [searchTerm])
  return (
<>

<h1 className='heading'>IPD Patient List</h1>
<p className='search-bar'>Search Name/ID : <input 
type='text' 
placeholder='Search ID/Name' className='search' 
searchTerm={searchTerm} 
onChange={(e) => {setSearchTerm(e.target.value)}}
/></p>

<IpdHeader />
<div>
  {patients.map((patient, index) => {
const {srNo, id, patientName, room, bedNo} = patient;

return  <IpdPatientListCard
key={index} 
srNo={srNo}
id={id}
patientName={patientName}
room={room}
bedNo={bedNo}
/>
  })}
</div>
{
  patients.length === 0 ? <span className='pa-center'>Patient is not found!😔</span> : null
} 
</>

  );
}

export default Ipd;
