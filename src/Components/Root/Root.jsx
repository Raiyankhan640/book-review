import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <>
            <div className='container mx-auto'>
                <Header></Header>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;