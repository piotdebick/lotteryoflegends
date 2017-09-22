import React from 'react';
import {connect} from 'react-redux';

import { championsFetch, ticketFetch } from 'actions';
import { history } from 'AppRouter';
import Header from './Header';
import ChampionDisplay from './ChampionDisplay';

class DashboardPage extends React.Component {
  checkTickets (user, dispatch) {
    var type = {
      start: 'START_TICKET_FETCH',
      complete: 'COMPLETE_TICKET_FETCH',
      fail: 'FAIL_TICKET_FETCH'
    }
    dispatch(ticketFetch(user, type));
  }
  componentDidMount () {
    var {dispatch, userID} = this.props;
    let type = {
      start: 'START_FREE_CHAMPIONS_FETCH',
      complete: 'COMPLETE_FREE_CHAMPIONS_FETCH',
      fail: 'FAIL_FREE_CHAMPIONS_FETCH'
    }
    dispatch(championsFetch('http://localhost:3001/champs/free', type));
    //dispatch for previous tickets
    if(userID){
      this.checkTickets(userID, dispatch);
    }
  }
  componentWillReceiveProps(nextProps){
    var {userID, dispatch} = this.props;
    if(userID != nextProps.userID){
      this.checkTickets(nextProps.userID, dispatch)
    }
  }

  previousTickets(tickets) {
    if(tickets.length > 0){
      return tickets.map((ticket, i) =>
        <div key={i}>
          <div className='container__subtitle'>{ticket.createdAt}</div>
          <ChampionDisplay champions={ticket.championPicks}/>
        </div>
      )
    }
  }

  checkSubmissions() {
    var {submissions} = this.props;
    if(submissions < 1) {
      return (
        <div className='big-button' onClick={()=>{history.push('/champselect')}}>SUBMIT THIS WEEKS CHAMPION TICKET</div>
      )
    } else {
      return (
        <div className='button-disabled'>THIS WEEKS TICKET HAS BEEN SUBMITTED</div>
      )
    }
  }

  render () {
    return (
          <div className='container'>
            <div className='box'>
              <div className='container__title'>THIS WEEKS FREE CHAMPIONS</div>
                <ChampionDisplay champions={this.props.freeChamps}/>
                {this.checkSubmissions()}
              <div className='container__title'>PREVIOUS TICKETS</div>
              {this.previousTickets(this.props.tickets)}
            </div>
          </div>
    )
  }
};

const mapStateToProps = (state) => {
  return{
    tickets: state.league.tickets,
    freeChamps:state.league.freeChampions,
    auth: state.auth,
    userID: state.user.userID,
    submissions: state.user.submissions
  };
}
export default connect(mapStateToProps)(DashboardPage);
