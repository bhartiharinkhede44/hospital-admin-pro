import "./PatientDetail.css"
import React from 'react'
import { useState } from "react";
function PatientDetail() {
    let [titlename, setTitleName] = useState('BCOM');
    return (
        <div>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <h3>Personal Information</h3>
                        <h2>Title:</h2>
                        <select className="drapdown-container"
                 value={titlename}
                  onChange={(e) => {
                    setTitleName= (e.target.value);
            localStorage.setItem('name','titlename');
          }}>
          <option value="Mr">Mr.</option>
          <option value="Miss">Miss.</option>
          <option value="BA">Ms.</option>
          <option value="BA">Dr.</option>

        </select>
                    </div>
                    <div class="col">
                        Column
                    </div>
                    <div class="col">
                        Column
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientDetail
