import React from 'react';
import "./Services.css";
import Dashboard from '../../components/Sidebar/Sidebar';
import Header from './../../components/Header/Header';
import ServiceCard from '../../components/ServiceCard/Servicecard';
import service from './service.png';
import { Link } from "react-router-dom";

function Service() {
    return (
        <>
            <div className='d-flex'>
                <div><Dashboard /></div>
                <div>
                    <Header />
                    <div className='top-header-on-dashboard'>
                        <div className='d-flex'><img src={service} alt='' className='img1' />
                            <div>
                                <h3 className='title'>Services</h3>
                                <p className='service-text'>Service information</p>
                            </div>
                        </div>

                    </div>
                    <div className='d-flex flex-wrap justify-content-around'>
                        <Link to="https://redlifesaver.vercel.app/"  className='linkto'>  <ServiceCard
                            img="https://tse2.mm.bing.net/th?id=OIP.T_yrVgdUOjv-1-ykJQ-b4gHaEd&pid=Api&P=0&h=180"
                            title="Blood Service"
                            mobile="226546 ,557789"
                            email="bloodcontainer123@gmail.com"
                        /></Link>

                        <Link to="https://www.24-seven.in/tiffin-service" className='linkto'>  <ServiceCard
                            title="Tiffin Service"
                            img="https://tse3.mm.bing.net/th?id=OIP.xAuy2eNSPk6Cy6Zg3fwWIwHaFS&pid=Api&P=0&h=180"
                            mobile="+91-7827247247"
                            email="tiffinservice36@gmail.com"
                        /></Link>

                        <Link to="https://bikeblitz.netlify.app/" className='linkto'>  <ServiceCard
                            title="Abulance Service"
                            img="https://tse2.mm.bing.net/th?id=OIP.PMOfYW3eZGrQY7yCbxWd4AHaFj&pid=Api&P=0&h=180"
                            email="emergencyambulance@gmail.com"
                            mobile="112"
                        /></Link>

                        <Link to="https://green-market-hub.vercel.app/" className='linkto'> <ServiceCard
                            title="Fruits Services"
                            img="https://tse1.mm.bing.net/th?id=OIP.MaRera5xQXBNg4FjFMzgqAHaE1&pid=Api&P=0&h=180"
                            email="gannafruites@gmail.com"
                            mobile="080-22370281"

                        />
                        </Link></div>
                </div>
            </div>


        </>
    )
}
export default Service;


