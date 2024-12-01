import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
  const { usuario } = useContext(AuthContext);

  return (
    usuario ? <Component /> : <Navigate to="/login" />
  );
};

export default PrivateRoute;
