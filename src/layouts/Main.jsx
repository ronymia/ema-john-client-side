import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navabar/Navbar';

function Main() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Main;
