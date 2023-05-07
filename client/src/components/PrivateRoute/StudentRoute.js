import React from 'react';
import { Redirect, Route } from 'react-router';

const StudentRoute = ({ children, ...rest }) => {
  const userJSON = localStorage.getItem('user');
  let user = null;

  try {
    user = JSON.parse(userJSON);
  } catch (error) {
    console.error('Error parsing user JSON:', error);
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user && user.role === 'Student' ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default StudentRoute;
