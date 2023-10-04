
import React from 'react';
import Config from './../../data/homeconfig.json';
import homeimg from './hospital.png'
import "./DashBoard.css"

function Home() {
    return (
        <>
            <div className='top-header-on-dashboard' style={{ backgroundColor: Config.theme.accentColor }}>
                <div className='d-flex'><img src={homeimg} className='img-hospital' />
                    <div>
                        <h3 className='text-start' style={{ color: Config.theme.primaryColor }}>{Config.title}</h3>
                        <p className='feture-text'>{Config.text}</p>
                    </div>
                </div>

            </div>

            <div className='dash-container'>
                {
                    Config.services.map((serviceData, index) => {
                        const { title, img, value } = serviceData
                        return (
                            <div className='d-flex'>
                                <div className='card-container' key={index}>
                                    <div className='card-1'>
                                        <img className="card-img" src={img} />
                                        <h3 className='card-title' style={{ color: Config.theme.primaryColor }}>{title}</h3>
                                        <h1 className='card-value'>{value}</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Home;