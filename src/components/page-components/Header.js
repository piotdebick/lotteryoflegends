import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from 'actions';

export const LoggedIn = ({...props}) => (
  <div className='header__content-buttons'>
    <Link className='header__button' to="/about">
      <h1>ABOUT</h1>
    </Link>
    <Link className='header__button' to="/" onClick={() => {
      logout(props.authToken);
      localStorage.removeItem('authToken');
    }}>
      <h1>LOGOUT</h1>
    </Link>
  </div>
);

export const LoggedOut = () => (
  <div className='header__content-buttons'>
    <Link className='header__button' to="/about">
      <h1>ABOUT</h1>
    </Link>
    <Link className='header__button' to="/login">
      <h1>LOGIN</h1>
    </Link>
    <Link className='header__button' to="/register">
      <h1>REGISTER</h1>
    </Link>
  </div>
);

export const Header = ({ ...props, logout}) => (
  <header className='header'>
    <div className='header__title'>
      <div className='header__content'>
        <div className='header__content-title'>
          <Link className='header__title' to="/dashboard">
            <h1>LOTTERY OF LEGENDS</h1>
          </Link>
        </div>
          {
            props.isAuth ?
              <LoggedIn authToken={props.authToken.authToken}/> :
              <LoggedOut />
          }
      </div>
    </div>
  </header>
);

const mapStateToProps = (state) => {
  return {
    auth: state.auth.isAuthenticated
  }
};

const mapDispatchToProps = (dispatch) => ({
  logout: (authToken) => dispatch(logout(authToken))
});

export default connect(undefined, mapDispatchToProps)(Header);
