import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const { user, loading } = useAuth();

    const [isAdmin, isLoading] = useAdmin()
    const location = useLocation();

    if(loading || isLoading){
        return <progress className="progress"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>

};

export default AdminRoute;