
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProviders/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Component/Loader';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    let location = useLocation();
    if(loading){
        return <Loader></Loader>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;
