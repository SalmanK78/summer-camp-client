import React from 'react';
import useInstructor from '../hooks/useInstructor';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const InstructorRoute = () => {
    const { user, loading } = useAuth();

    const [isAdmin, isLoading] = useInstructor();
    const location = useLocation();

    if(loading || isLoading){
        return <progress className="progress"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>

};

export default InstructorRoute;