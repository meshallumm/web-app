import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// this children can only be accessed when the user is not logged in
function GuestGuard({ children, auth, path }) {
  return (
    <Route
      path={path}
      render={() => {
        return !auth ? children : <Redirect to='/home' />;
      }}
    />
  );
}
export default GuestGuard;
