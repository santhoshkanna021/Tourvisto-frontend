import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Homepage/Navbar'; // adjust path as needed

const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet /> {/* Page-specific content goes here */}
      </div>
    </>
  );
};

export default Layout;
