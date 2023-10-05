import React, { useEffect, useState } from 'react';
import { ipdpatientlist } from '../../data/ipdpatientlist';
import IpdPatientListCard from './../../components/IpdPatientList/IpdPatientListCard';
import IpdHeader from './../../components/IpdHeader/IpdHeader';
import "./Ipd.css";
import Header from '../../components/Header/Header';
import bed from './bed.png';
import add from './add.png';
import showToast from 'crunchy-toast';
import { saveListToLocalStorage } from './../../data/localstorage';
import Sidebar from '../../components/Sidebar/Sidebar';

function Ipd() {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // const [srNo, setSrNo] = useState(1);
  const [id, setId] = useState(1);
  const [patientName, setPatientName] = useState('');
  const [room, setRoom] = useState('');
  const [bedNo, setBedNo] = useState('');
  const [isEdit, setIsEdit] = useState('');

  useEffect(() => {
    const filteredPatients = ipdpatientlist.filter((patient) => {
      const name = patient.patientName.toLowerCase();
      const mobile = patient.id.toString();
      const query = searchTerm.toLowerCase();
      return name.includes(query) || mobile.includes(query);
    });

    setPatients(filteredPatients);
  }, [searchTerm]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('taskminder'));
    if (list && list.length >= 0) {
      setPatients(list);
    }
  }, []);

  const findIndexByListId = (taskId) => {
    let index;

    patients.forEach((task, i) => {
      if (task.id === taskId) {
        index = i;
      }
    });
    return index;
  };

  const clearInputFields = () => {
    // setSrNo('');
    setPatientName('');
    setRoom('');
    setBedNo('');
  };

  const addPatientToList = () => {
    // if(!srNo)
    // {
    //   showToast("Sr Number is Required.",'alert', 3000);
    //   return;
    // }
    if(!patientName)
    {
      showToast("patient name is Required.",'alert', 3000);
      return;
    }
    if(!room)
    {
      showToast("Room Type is Required.",'alert', 3000);
      return;
    }
    if(!bedNo)
    {
      showToast("Bed Number is Required.",'alert', 3000);
      return;
    }
    // const incrementId = () => {
    //   setId(id + 1);
    // };

 
   const ranid=  Math.floor(Math.random()*1000000)
    const obj = {
      id: ranid,
      // srNo: srNo,
      patientName: patientName,
      room: room,
      bedNo: bedNo
    };

    const newPatientList = [...patients, obj];
    setPatients(newPatientList);

    clearInputFields();

    saveListToLocalStorage(newPatientList);
    showToast('Patient added successfully', 'success', 3000);
  };

  const removePatientFromList = (id) => {
    const index = findIndexByListId(id);
    const tempArray = patients.slice();
    tempArray.splice(index, 1);

    setPatients(tempArray);

    saveListToLocalStorage(tempArray);
    showToast('Task removed from list successfully', 'success', 3000);
  };

  const setListEditable = (id) => {
    setIsEdit(true);
    setId(id);

    const currentEditlist = findIndexByListId(id);
    // setSrNo(currentEditlist.srNo);
    setPatientName(currentEditlist.patientName);
    setRoom(currentEditlist.room);
    setBedNo(currentEditlist.bedNo);

    console.log(currentEditlist);
  };

  const UpdateList = () => {
    const indexToUpdate = findIndexByListId(id);

    const tempArray = [...patients];
    tempArray[indexToUpdate] = {
      id: id,
      // srNo: srNo,
      patientName: patientName,
      room: room,
      bedNo: bedNo
    };
    setPatients(tempArray);
    saveListToLocalStorage(tempArray);
    showToast('Task updated successfully', 'success', 3000);

    setId(-1);
    clearInputFields();
    setIsEdit(false);
  };

  return (
    <>
      <div className='d-flex'>
        <div><Sidebar /></div>
        <div className='ipd-list-div'>
          <Header />
          <div className='ipd-top-header d-flex'><img src={bed} /><h1 className='heading'>IPD Patient</h1></div>

          <div className='search-div d-flex'>
            <div>
              <p className='search-bar pe-5'>Search Name/ID : &nbsp;<input
                type='text'
                placeholder='Search ID/Name'
                className='search'
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value) }}
              /></p>
            </div>
          </div>

          <div className='container-patient div-patient-list'>
            <div>
              <IpdHeader />
            </div>
            <div>
              {patients.map((patient, index) => {
                const { id, patientName, room, bedNo } = patient;

                return <IpdPatientListCard
                  key={index}
                  // srNo={srNo}
                  id={id}
                  patientName={patientName}
                  room={room}
                  bedNo={bedNo}
                  removePatientFromList={removePatientFromList}
                  setListEditable={setListEditable}
                  index={index}
                />
              })}
            </div>
            {
              patients.length === 0 ? <span className='pa-center'>Patient is not found!</span> : null
            }
          </div>
          <hr />
          <div>
            <h1 className='add-btn'><img src={add} />{isEdit ? `UPDATE ${id}` : 'ADD PATIENT'}</h1>
            <div>
              <div>
            
                <div className="add-patient-to-list-container">
                  <form>
                   
                    <input
                      type="text"
                      value={patientName}
                      onChange={(e) => {
                        setPatientName(e.target.value)
                      }}
                      placeholder="Enter Patient Name"
                      className="task-input"
                    />
                    <input
                      type="text"
                      value={room}
                      onChange={(e) => {
                        setRoom(e.target.value)
                      }}
                      placeholder="Room (AC/NON-AC)"
                      className="task-input"
                    />
                    <input
                      type="number"
                      value={bedNo}
                      onChange={(e) => {
                        setBedNo(e.target.value)
                      }}

                      placeholder="Bed No."
                      className="task-input"
                    />
                    {
                      isEdit ?
                        <button className="btn-add-task" type="button" onClick={UpdateList}>Update </button>
                        :
                        <button className="btn-add-task" type="button" onClick={addPatientToList}>Add Patient</button>
                    }
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ipd;

