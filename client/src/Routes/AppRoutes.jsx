import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../Components/Pages/HomePage';
import Login from '../Components/Auth/Login';
import Navbar from '../Components/Layouts/Navbar';

const AppRoutes = () => {
  // Array of routes that should not show the navbar
  const routesWithoutNavbar = ['/login', '/signup', '/forgot-password'];

  // Function to determine if navbar should be shown on current path
  const shouldShowNavbar = () => {
    const currentPath = window.location.pathname;
    return !routesWithoutNavbar.includes(currentPath);
  };

  return (
    <BrowserRouter>
      {/* 
        This approach allows for more flexibility:
        1. The navbar will render only on routes where it should appear
        2. Prevents layout issues with fixed navbar on auth pages
      */}
      {shouldShowNavbar() && <Navbar />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;