import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContxt } from '../contexts/UserContext';
import Loading from '../pages/Loading/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContxt);
    const location = useLocation();

    if (loading) {
        return <Loading />
    }

    if (user && user.uid) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}

export default PrivateRoute;


