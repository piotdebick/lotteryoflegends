import React from 'react';
import {connect} from 'react-redux';

import { championsFetch, ticketFetch } from 'actions';
import { history } from 'AppRouter';
import Header from './Header';
import TicketDisplay from './TicketDisplay';
import UserWelcome from './UserWelcome';

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

  render () {
    return (
          <div className='container'>
            <div className='box'>
              <UserWelcome user={this.props.user}/>
              <TicketDisplay customClass='ticket-1' type={'tickets'} tickets={this.props.tickets}/>
              <TicketDisplay customClass='ticket-2' type={'free'} tickets={this.props.freeChamps}/>
            </div>
          </div>
    )
  }
};

const mapStateToProps = (state) => {
  return{
    tickets: state.league.tickets,
    freeChamps:state.league.freeChampions,
    userID: state.user.userID,
    user: state.user
  };
}
export default connect(mapStateToProps)(DashboardPage);
