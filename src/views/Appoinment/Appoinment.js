import React, { useEffect, useState } from 'react';
import "./Appoinment.css"
import { appoinmentpatient } from '../../data/appoinmentpatient';
import Header from '../../components/Header/Header';
import add from './add.png';
import showToast from 'crunchy-toast';
import { saveListToLocalStorageAppoinmentPatients } from './../../data/localstorage';
import Sidebar from '../../components/Sidebar/Sidebar';
import AppoinmentHeader from '../../components/AppoinmentHeader/AppoinmentHeader';
import AppoinmentPatientcard from './../../components/AppoinmentPatientCard/AppoinmentPatientCar'

function OpdPatients() {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // const [srNo, setSrNo] = useState(1);
  const [id, setId] = useState(1);
  const [patientName, setPatientName] = useState('');
 const [time, setTime] = useState('');
  const [city, setCity] = useState('');
  const [contactNo, setContactNo] = useState('');
 const [department, setDepartment] = useState('');

  useEffect(() => {
    const filteredPatients = appoinmentpatient.filter((patient) => {
      const name = patient.patientName.toLowerCase();
      const mobile = patient.id.toString();
      const query = searchTerm.toLowerCase();
      return name.includes(query) || mobile.includes(query);
    });

    setPatients(filteredPatients);
  }, [searchTerm]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('appoinmentlistpatient'));
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
    setCity('');
    setContactNo('');
    setTime('');
    setDepartment('');

  };

  const addPatientToList = () => {
    // if(!srNo)
    // {
    //   showToast("Sr Number is Required.",'alert', 3000);
    //   return;
    // }
    if (!patientName) {
      showToast("patient name is Required.", 'alert', 3000);
      return;
    }
    if (!time) {
      showToast("time is Required.", 'alert', 3000);
      return;
    }
    if (!city) {
      showToast("Patient City is Required.", 'alert', 3000);
      return;
    }
    if (!contactNo) {
      showToast("Patient Contact Number is Required.", 'alert', 3000);
      return;
    }
    if (!department) {
      showToast("Department name is Required.", 'alert', 3000);
      return;
    }


    const ranid = Math.floor(Math.random() * 1000000)
    const obj = {
      id: ranid,
      // srNo: srNo,
      patientName: patientName,
      city: city,
      contactNo: contactNo,
      time: time,
      department: department
    };

    const newPatientList = [...patients, obj];
    setPatients(newPatientList);

    clearInputFields();

    saveListToLocalStorageAppoinmentPatients(newPatientList);
    showToast('Patient added successfully', 'success', 3000);
  };

  const removePatientFromList = (id) => {
    const index = findIndexByListId(id);
    const tempArray = patients.slice();
    tempArray.splice(index, 1);

    setPatients(tempArray);

    saveListToLocalStorageAppoinmentPatients(tempArray);
    showToast('Task removed from list successfully', 'success', 3000);
  };



  return (
    <>
      <div className='d-flex'>
        <div><Sidebar /></div>
        <div className='ipd-list-div'>
          <Header />
          <div className='ipd-top-header d-flex'><img src={add} /><h1 className='heading'>Appoinment Patients</h1></div>

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
              <AppoinmentHeader />
            </div>
            <div>
              {patients.map((patient, index) => {
                const { id, patientName, city, time, department, contactNo } = patient;

                return <AppoinmentPatientcard
                  key={index}
                  id={id}
                  patientName={patientName}
                  city={city}

                  contactNo={contactNo}
                  time={time}
                  department={department}
                  removePatientFromList={removePatientFromList}
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
            <h1 className='add-btn'><img src={add} />ADD PATIENT</h1>
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
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value)
                      }}

                      placeholder="City"
                      className="task-input"
                    />
                    
                    <input
                      type="number"
                      value={contactNo}
                      onChange={(e) => {
                        setContactNo(e.target.value)
                      }}

                      placeholder="Contact Number"
                      className="task-input"
                    />
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => {
                        setTime(e.target.value)
                      }}
                    
                      className="task-input"
                    />
                    <input
                      type="text"
                      value={department}
                      onChange={(e) => {
                        setDepartment(e.target.value)
                      }}

                      placeholder="Department"
                      className="task-input"
                    />



                    <button className="btn-add-task" type="button" onClick={addPatientToList}>Add Patient</button>

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

export default OpdPatients;

