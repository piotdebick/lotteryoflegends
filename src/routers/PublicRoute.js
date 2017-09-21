import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from 'components/page-components/Header';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <div>
          <Header authToken={''} isAuth={isAuthenticated}/>
          <Component {...props} />
        </div>
        )
    )} />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isLoggedIn
});

export default connect(mapStateToProps)(PublicRoute);
