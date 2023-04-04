import React from 'react';
import { Link } from 'react-router-dom';
import Activelink from '../ActiveLink/Activelink';

const Header = () => {
    return (
        <nav className='px-2 md:px-10 py-8 bg-gray-100 flex justify-between'>
            <Link className='hover:text-blue-600 text-xl font-bold' to={'/'}>Nav Brand</Link>
            <Activelink to={'/countries'}>Countries</Activelink>
        </nav>
    );
};

export default Header;