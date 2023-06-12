import React from 'react';
import Home from '../pages/Home/Home';
import NavBar from '../pages/shared/NavBar';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Home/Banner';

const Main = () => {
    return (
        <div className='mx-auto max-w-7xl'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;