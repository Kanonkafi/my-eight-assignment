import React from 'react';
import Navbar from '../Componant/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Componant/Footer';

const MainLayout = () => {
    return (
         <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='max-w-screen-2xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-5 flex-1'>
        <Outlet />
      </div>
      <Footer />
    </div>
    );
};

export default MainLayout;