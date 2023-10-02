import React, { useEffect, useState } from 'react';
import  {ipdpatientlist}  from '../../data/ipdpatientlist';
import IpdPatientListCard from './../../components/IpdPatientList/IpdPatientListCard'
import IpdHeader from './../../components/IpdHeader/IpdHeader'
import "./Ipd.css"


function Ipd() {
 const [contacts, setContacts] = useState(ipdpatientlist);
 const [searchTerm, setSearchTerm] = useState('')

 useEffect(() => {
  const filteredContacts = ipdpatientlist.filter((contact) => {
    const name = contact.patientName.toLocaleLowerCase();
    const mobile = contact.id.toString();
    const query = searchTerm.toLowerCase();
    return (name.includes(query) || mobile.includes(query))
  })

  setContacts(filteredContacts);
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
  {contacts.map((contact, index) => {
const {srNo, id, patientName, room, bedNo} = contact;

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
  contacts.length === 0 ? <span className='pa-center'>Patient is not found!😔</span> : null
} 
</>

  );
}

export default Ipd;
