import React, { useEffect, useState } from 'react';
import { opdpatientlist } from '../../data/opdpatientlist';
import OpdPatientListCard from './../../components/OpdPatientListCard/OpdPatientListCard';
import OpdHeader from './../../components/OpdHeader/OpdHeader';
import "./Opd.css";
import Header from '../../components/Header/Header';
import bed from './opdP.png';
import add from './add.png';
import showToast from 'crunchy-toast';
import { saveListToLocalStorageOpdPatients } from './../../data/localstorage';
import Sidebar from '../../components/Sidebar/Sidebar';

function OpdPatients() {
  const [patients, setPatients] = useState(opdpatientlist);
  const [searchTerm, setSearchTerm] = useState('');
  const [id, setId] = useState(1);
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [city, setCity] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [isEdit, setIsEdit] = useState('');
  const [filteredPatient,setFilteredPatients]=useState([])
  useEffect(() => {
    const filtered = patients.filter((patient) => {
      const name = patient.patientName.toLowerCase();
      const id = patient.id.toString();
      const query = searchTerm.toLowerCase();
      return name.includes(query) || id.includes(query);
    });
  
    if (searchTerm === '') {
      setFilteredPatients(patients); 
    } else {
      setFilteredPatients(filtered);
    }
  }, [searchTerm, patients]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('opdlistpatient'));
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
    setPatientName('');
    setAge('');
    setBloodGroup('');
    setCity('');
    setContactNo('');
  };

  const addPatientToList = () => {
    if (!patientName || !age || !city || !contactNo) {
      showToast("All fields are required.", 'alert', 3000);
      return;
    }

    const ranid = Math.floor(Math.random() * 1000000);
    const obj = {
      id: ranid,
      patientName: patientName,
      age: age,
      bloodGroup: bloodGroup,
      city: city,
      contactNo: contactNo
    };

    const newPatientList = [...patients, obj];
    setPatients(newPatientList);
    clearInputFields();
    saveListToLocalStorageOpdPatients(newPatientList);
    showToast('Patient added successfully', 'success', 3000);
  };

  const removePatientFromList = (id) => {
    const index = findIndexByListId(id);
    const tempArray = patients.slice();
    tempArray.splice(index, 1);

    setPatients(tempArray);

    saveListToLocalStorageOpdPatients(tempArray);
    showToast('Patient removed from list successfully', 'success', 3000);
  };

  const setListEditable = (id) => {
    setIsEdit(true);
    setId(id);

    const currentEditlist = findIndexByListId(id);
    setPatientName(currentEditlist.patientName);
    setAge(currentEditlist.age);
    setBloodGroup(currentEditlist.bloodGroup);
    setCity(currentEditlist.city);
    setContactNo(currentEditlist.contactNo);
  };

  const UpdateList = () => {
    const indexToUpdate = findIndexByListId(id);
    const tempArray = [...patients];
    tempArray[indexToUpdate] = {
      id: id,
      patientName: patientName,
      age: age,
      bloodGroup: bloodGroup,
      city: city,
      contactNo: contactNo
    };
    setPatients(tempArray);
    saveListToLocalStorageOpdPatients(tempArray);
    showToast('Patient updated successfully', 'success', 3000);

    setId(-1);
    clearInputFields();
    setIsEdit(false);
  };

  return (
    <>
      <div className='d-flex contain'>
        <div><Sidebar /></div>
        <div className='ipd-list-div'>
          <Header />
          <div className='ipd-top-header d-flex'><img src={bed} className='png-bed'/><h1 className='heading'>OPD Patient</h1></div>
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
              <OpdHeader />
            </div>
            <div>
              {filteredPatient.map((patient, index) => {
                const { id, patientName, age, city, bloodGroup, contactNo } = patient;
                return <OpdPatientListCard
                  key={index}
                  id={id}
                  patientName={patientName}
                  age={age}
                  bloodGroup={bloodGroup}
                  city={city}
                  contactNo={contactNo}
                  removePatientFromList={removePatientFromList}
                  setListEditable={setListEditable}
                  index={index}
                />
              })}
            </div>
            {patients.length === 0 ? <span className='pa-center'>Patient is not found!</span> : null}
          </div>
          <hr />
          <div>
            <h1 className='add-btn'><img src={add} />{isEdit ? `Update ${id}` : 'Add Patient'}</h1>
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
                      type="number"
                      value={age}
                      onChange={(e) => {
                        setAge(e.target.value)
                      }}
                      placeholder="Enter Age"
                      className="task-input"
                    />
                    <input
                      type="text"
                      value={bloodGroup}
                      onChange={(e) => {
                        setBloodGroup(e.target.value)
                      }}
                      placeholder="Blood Group."
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
                    {isEdit ?
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

export default OpdPatients;