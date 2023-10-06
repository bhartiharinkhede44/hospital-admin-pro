import React from 'react';
import './Department.css'
import Dashboard from './../../components/Sidebar/Sidebar'
import Header from './../../components/Header/Header'
import Config from './../../data/departmentconfic.json'
import deparimage from './../DashBoard/hospital.png'

const Department = () => {
  return (
    <div className='department-container d-flex'>
      <div><Dashboard /></div>
      <div className='depertment-header'><Header />
        <div className='top-header-on-dashboard' style={{ backgroundColor: Config.theme.accentColor }}>
          <div className='d-flex'><img src={deparimage} className='img-hospital' />
            <div>
              <h3 className='text-start' style={{ color: Config.theme.primaryColor }}>{Config.title}</h3>
              <p className='feture-text'>{Config.text}</p>
            </div>
          </div></div>
        <div className='depara-body'>
          <div className='depara-container'>
            {
              Config.Department.map((serviceData, index) => {
                const { title, img, description, value } = serviceData

                return (
                  <div class="card" style={{width:"18rem;"}}>
                    <img src={img} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                        
                      </div>
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>




    </div>
  )
}

export default Department
