import React from 'react';

const HomePage = () => (
  <div className="container">
      <div className='box-home'>
        <div className='box-home__title'>LOTTERY OF LEGENDS</div>
        <div className='box-home__subtitle'>" Lady luck is smilin'. "</div>
          <div className='ticket-display-alt ticket-0 '>
            <div className='ticket-display__title'>
              REGISTER YOUR ACCOUNT
            </div>
            <div className='ticket-display__content'>
              Register with your League of Legends summoner name to begin playing the Lottery of Legends! It is absolutely free to play!
            </div>
          </div>
          <div className='ticket-display-alt ticket-1 '>
            <div className='ticket-display__title'>
              SUBMIT A TICKET
            </div>
            <div className='ticket-display__content'>
              Submit your guess for next weeks League of Legends champion rotation for a chance to win some Riot Points!
            </div>
          </div>
          <div className='ticket-display-alt ticket-2 '>
            <div className='ticket-display__title'>
              WIN RIOT POINTS!
            </div>
            <div className='ticket-display__content'>
              First, second, and third place winners will receive 2800 RP, 1380 RP, and 650 RP, respectively. The more people that play, the larger the prize pool!
            </div>
          </div>
      </div>
  </div>
);

export default HomePage;
