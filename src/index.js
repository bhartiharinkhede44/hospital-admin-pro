import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './views/Home/Home'
import DashBoard from './views/DashBoard/DashBoard'
import Ipd from './views/Ipd/Ipd'
import Department from './views/Department/Department';

import Registration from './views/Registration/Registration'
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import OpdPatients from './views/Opd/Opd';
import DoctorModule from './views/DoctorModule/DoctorModule'
import SignUp from './views/SignUp/SignUp';
import LoginPage from './views/LoginPage/LoginPage';


const router =createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path: "/dashBoard",
        element:<DashBoard/>
    },
    {
        path: "/Ipd",
        element:<Ipd/>
    },
    {
        path:"/deparment",
        element:<Department/>
    },
     {
        path:"/opd",
        element:<OpdPatients/>
    },
    {
        path:"/reg",
        element:<Registration />
    },
   {
    path:"/dr",
    element:<DoctorModule/>
   },
   {
    path:"/signup",
    element:<SignUp/>
   },
   {
    path:"/contact",
    element:<Contact/>
   },
   {
    path:"/login",
    element:<LoginPage/>
   }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
