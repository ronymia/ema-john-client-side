import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContxt } from '../contexts/UserContext';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContxt);

    if (user && user.uid) {
        return children;
    }

    return <Navigate to="/login"></Navigate>
}

export default PrivateRoute;


