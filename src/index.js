import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './views/Home/Home';
import DashBoard from './views/DashBoard/DashBoard';
import Ipd from './views/Ipd/Ipd';
import Department from './views/Department/Department';
import OpdPatients from './views/Opd/Opd';
import Registration from './views/Registration/Registration'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DoctorModule from './views/DoctorModule/DoctorModule'
import SignUp from './views/SignUp/SignUp';
import LoginPage from './views/LoginPage/LoginPage';
import PatientDetail from './views/PatientDetail/PatientDetail';
import Contact  from './views/Contact/Contact';
import Appoinment from './views/Appoinment/Appoinment';
import Faq from './views/HomeFaq/HomeFaq'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    // {
    //     path: "/about",
    //     element: <About />
    // },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/dashboard",
        element: <DashBoard />
    },
    {
        path: "/deparment",
        element: <Department />
    },
    {
        path: "/doctormodule",
        element: <DoctorModule />
    },
    {
        path: "/appoinment",
        element: <Appoinment />
    },
    {
        path: "/registartion",
        element: <Registration />
    },
    {
        path: "/ipd",
        element: <Ipd />
    },
    {
        path: "/opd",
        element: <OpdPatients />
    },
    {
        path: "/patientdetail",
        element: <PatientDetail />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/faq",
        element: <Faq />
    }
   

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
