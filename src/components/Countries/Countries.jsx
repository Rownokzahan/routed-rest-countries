import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Country from '../Country/Country';

const Countries = () => {

    const countries = useLoaderData();
    const navigate = useNavigate();

    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {countries.map(country => <Country key={ country.cca3 } country={country}></Country>)}
        </div>
    );
};

export default Countries;