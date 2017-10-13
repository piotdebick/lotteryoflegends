import React from 'react';
import {history} from 'AppRouter'

class UserContainer extends React.Component{
  checkSubmissions (submissions) {
    if(submissions < 1) {
      return (
        <div>
          <h3>
            SUBMIT A CHAMPION TICKET
          </h3>
          <div className='big-button' onClick={()=>{history.push('/champselect')}}>SUBMIT A TICKET</div>
        </div>
      )
    } else {
      return (
        <div>
          <h3>
            YOU HAVE SUCCESSFULLY SUBMITTED YOUR TICKET
          </h3>
          <div className='big-button-disabled'>AWAITING RESULTS</div>
        </div>
      )
    }
  }
  render () {
    return (
      <div className='box__outline'>
        <div className='box__face'>
          <img
              className=''
              type="image"
              src={`https://ddragon.leagueoflegends.com/cdn/7.20.2/img/profileicon/${this.props.user.profileIconId}.png`}
            />
            <h2>
              Welcome, {this.props.user.username}!
            </h2>
            <ul className='box__face__details'>
              <li>Region: {this.props.user.region}</li>
              <li>Level: {this.props.user.summonerLevel}</li>
            </ul>

            {this.checkSubmissions(this.props.user.submissions)}
        </div>

      </div>
    )
  }
}

export default UserContainer;
