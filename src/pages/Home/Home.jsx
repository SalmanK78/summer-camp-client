import React from 'react';
import Banner from './Banner';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';
import Section from './Section';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Section></Section>
        </div>
    );
}; 

export default Home;