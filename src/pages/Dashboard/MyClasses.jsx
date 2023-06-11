import React from 'react';
import dataLoader from '../../hooks/dataLoader';

const MyClasses = () => {
    const [data] = dataLoader('/selected')
    console.log(data)
    return (
        <div>
            
        </div>
    );
};

export default MyClasses;