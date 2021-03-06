import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
        const { user, isLoading } = useAuth();
        let location = useLocation();

        if(isLoading){
            <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            </div>
        }
        if(user.email){
            return children;
        }
        return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;