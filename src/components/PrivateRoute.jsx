
import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const isAuthenticated = localStorage.getItem('adminAuth');

    return isAuthenticated ? children : <Navigate to="/admin/login" />;
}

export default PrivateRoute;
