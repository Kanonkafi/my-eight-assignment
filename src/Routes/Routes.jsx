import React from 'react';
import { createBrowserRouter, Router } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import ErrorPage from '../Pages/ErrorPage';
import Apps from '../Pages/Apps';
import Installation from '../Pages/Installation';
import AppsDetails from '../Pages/AppsDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
     errorElement: <ErrorPage />,
    children:[
        {
        index: true,
        Component: Home,
        
      },
      {
        path: '/apps',
        element: <Apps />,
      },
      {
        path: '/installation',
        element: <Installation />,
      },
       {
        path: '/app/:id',
        element: <AppsDetails />,
      },
    ]
  },
]);

export default router;