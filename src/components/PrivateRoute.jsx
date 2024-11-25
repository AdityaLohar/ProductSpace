import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    console.log("entry done")
  const token = localStorage.getItem('token'); // Check for the token

  console.log(token);

  if (!token) {
    // Redirect to login if no token is found
    return <Navigate to="/login" replace />;
  }

  // Render the child components if the user is authenticated
  return children;
};

export default PrivateRoute;