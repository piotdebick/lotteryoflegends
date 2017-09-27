import React from 'react';
import { history } from 'AppRouter';
import {connect} from 'react-redux';
import Header from './Header';

const AboutPage = () => (
  <div>
    <div className="container">
      <div className="box">
        <h2>About Lottery of Legends</h2>
        <p>
          Lottery of Legends is a lottery system for Riot Points. All you have to do
          is guess the following weeks champion rotation, and you might win some
          Riot points! You don't have to guess all of the champions correctly. You
          just have to be one of the three (subject to change) summoners with the most
          correct choices in a row!
        </p>
        <h2>How does it work?</h2>
        <p>
          The prize pool depends entirely on our ad revenue. The more summoners
          that sign up and use our application, the more Riot Points we are able
          to give out. Our prize pool scales with the amount of traffic and ad
          revenue we get, so invite your friends!
        </p>
        <h2>How are winners decided?</h2>
        <p>
          Once the champion rotation is confirmed, we compare your champion ticket
          submissions with the champion rotation. You must have the most champions
          correctly chosen <b>in a row</b> in order to be one of the winners. Currently,
          we have three winner slots, but that could change depending on the site traffic.
          The prizes are subject to change as well, but for now third place will receive 650 riot points, second place will recieve 1380 riot points, and first place will recieve 2800
          riot points (your regions relative equivalent).
        </p>
        <h2>When can I expect the results?</h2>
        <p>
          Ticket submissions for the upcoming champion rotation ends every Sunday
          at 11:59PM EST, and begin for the following champion rotation on Monday
          12:00AM EST. Winners will be decided once the champion rotation is confirmed
          and prizes will be distributed in the following days.
        </p>
        <h2>Contact</h2>
        <p>
          If you find a bug, or have any design suggestions, or want to suggest an addition to the site, or any other inquiries, you can email as at:
          <strong> anemail@email</strong>
        </p>
      </div>
    </div>
  </div>
);


export default AboutPage;
