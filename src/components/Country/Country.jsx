import React from 'react';
import { useNavigate } from 'react-router-dom';

const Country = (props) => {

    const { name, cca3, flags } = props.country;
    const navigate = useNavigate();

    return (
        <div className='rounded p-4 bg-blue-50 flex flex-col gap-4'>
            <img className='w-full h-36' src={flags.png} alt={name.common} />
            <h2 className='text-2xl font-bold'>{name.common}</h2>

            <button onClick={() => navigate(`/country/${cca3}`)} className='bg-blue-500 hover:bg-blue-600 font-bold px-2 py-1 rounded'>See Details</button>
        </div>
    );
};

export default Country;