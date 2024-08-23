import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;