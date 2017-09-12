import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from 'actions';

export const Header = ({ ...props, logout}) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Lottery of Legends</h1>
        </Link>
        <button className="button button--link" onClick={() => {
          logout(props.authToken.authToken);
          localStorage.removeItem('authToken');
        }}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  logout: (authToken) => dispatch(logout(authToken))
});

export default connect(undefined, mapDispatchToProps)(Header);
