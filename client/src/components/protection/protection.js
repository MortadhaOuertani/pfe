import { Route, Navigate, Routes, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({auth}) => {
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
  const User = () => {

    if (auth.isConnected) { return <Outlet /> }
    return <Navigate to="/login" />
}
return User();
};

export default ProtectedRoute;