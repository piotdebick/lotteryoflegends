import React from 'react';
import { history } from 'AppRouter';
import {connect} from 'react-redux';
import Header from './Header';

const AboutPage = (props) => (
  <div>
    <Header authToken={props.auth} isAuth={props.isAuth}/>
    <div className="container">
      <div className="box">
        <h2>About Lottery of Legends</h2>
        <p>
          Lottery of Legends is a lottery system for Riot Points. All you have to do
          is guess the following weeks champion rotation, and you might win some
          Riot points! You don't have to guess all of the champions correctly. You
          just have to be one of the three (subject to change) Summoners with the most
          correct choices in a row!
        </p>
        <h2>How does it work?</h2>
        <p>
          The prize pool depends entirely on our ad revenue. The more summoners
          that sign up and use our application, the more Riot Points we are able
          to give out. Our prize pool scales with the amount of traffic and ad
          revenue we get, so invite your friends!
        </p>
        <h2>Contact</h2>
        <p>
          If you find any bugs, or have any suggestions, please email us at
          <b>anemail@email</b>
        </p>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    auth: state.auth.authToken,
    isAuth: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(AboutPage);
