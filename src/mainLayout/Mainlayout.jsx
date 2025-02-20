import React from 'react';
import Navbar from '../home/Navbar';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Mainlayout;