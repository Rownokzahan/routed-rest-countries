import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CountryDetail = () => {

    const data = useLoaderData();
    const { name, flags, population, capital, languages, currencies } = data[0];

    return (
        <div>
            <img src={flags.png} alt="" />
            <h2 className='text-2xl font-bold'>{name.common}</h2>
            <h4 className='text-xl font-semibold'>Capital : {capital? capital[0] :"Don not have capital"}</h4>
            <h4 className='text-xl font-semibold'>Populaton : {population}</h4>
            <h4 className='text-xl font-semibold'>Languages : {Object.values(languages).map(language=>language)}</h4>
            <h4 className='text-xl font-semibold'>Currencies : {Object.values(currencies).map(currency => currency.name)}</h4>       
        </div>
    );
};

export default CountryDetail;