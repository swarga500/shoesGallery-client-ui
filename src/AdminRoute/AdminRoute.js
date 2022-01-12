import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';
import loader from '../images/loader.gif'

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, admin } = useAuth()
  if (isLoading) {
    return <div className='h-screen flex items-center justify-center'><img src={loader} alt="" /></div>
  }
  if (!admin) {
    return <div className='h-screen flex items-center justify-center'><img src={loader} alt="" /></div>
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;