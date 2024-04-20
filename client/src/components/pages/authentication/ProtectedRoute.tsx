import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';


interface IProtectedRoute{
  children:React.ReactNode
}
const ProtectedRoute:React.FC<IProtectedRoute> = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
