import React from 'react';
import Navbar from '../Componant/Navbar';
import { useRouteError } from 'react-router';
import Footer from '../Componant/Footer';

const ErrorPage = () => {
     const error = useRouteError()

  return (
    <>
      <Navbar />
      <div>{error.message}</div>
      <Footer />
    </>
  
    );
};

export default ErrorPage;