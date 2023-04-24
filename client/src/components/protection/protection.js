import { Route, Navigate, Routes, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ auth, Role }) => {
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
    if (!auth.isConnected) {
      return <Navigate to="/login" />;
    }

    if (auth.isConnected && Role === auth.role) { return <Outlet /> }
    if (Role !== auth.role) {
      return <Navigate to="/" />;
    }
  }
  return User();
};

export default ProtectedRoute;