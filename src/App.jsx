
import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='w-max-[1440px] mx-auto'>
      <Header></Header>
      <div className='mx-2 md:mx-10 my-10'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default App;