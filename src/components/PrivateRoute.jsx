import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const isAuthenticated = localStorage.getItem('adminAuth');

    // Check if the user is authenticated; otherwise, redirect to the correct login path
    return isAuthenticated ? children : <Navigate to="/okvcvdsdv3wfdzx" />;
}

export default PrivateRoute;
