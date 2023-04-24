import { Route, Navigate, Routes, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const ProtectedAdmin = ({ auth }) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    const Admin = () => {

        if (auth.role =="ADMIN") { return <Outlet /> }
        if (auth.role !=="ADMIN") { return <Navigate to="/" /> }
        return <Navigate to="/login" />
    }
    return Admin();
};

export default ProtectedAdmin;