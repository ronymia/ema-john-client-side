import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContxt } from '../contexts/UserContext';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContxt);
    const location = useLocation();

    if (user && user.uid) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}

export default PrivateRoute;


