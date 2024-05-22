import React from 'react';

const Subtile = ({Subtittle,tittle}) => {
    return (
        <div className='md:w-4/12 text-center mx-auto my-10'>
            <p className='text-amber-400 mb-2'>{Subtittle}</p>
            <h1 className='text-4xl border-y-4 py-4 border-{#E8E8E8}'>{tittle}</h1>
        </div>
    );
};

export default Subtile;