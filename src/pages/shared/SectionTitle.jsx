import React from 'react';

const SectionTitle = ({head,des}) => {
    return (
        <div className='text-center md:max-w-lg mx-auto'>
            <h1 className='text-3xl font-bold'>{head}</h1>
            <h2 className='mt-2'>{des}</h2>
        </div>
    );
};

export default SectionTitle;