import React from 'react';
import { Outlet } from 'react-router';
import { AuthProvider } from '../context/AuthContext';

const MainLayout = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default MainLayout
