import React from 'react';
import {connect} from 'react-redux';

import { championsFetch, ticketFetch } from 'actions';
import { history } from 'AppRouter';
import Header from './Header';
import ChampionDisplay from './ChampionDisplay';

class DashboardPage extends React.Component {
  componentDidMount () {
    var {dispatch, userID} = this.props;
    let type = {
      start: 'START_FREE_CHAMPIONS_FETCH',
      complete: 'COMPLETE_FREE_CHAMPIONS_FETCH',
      fail: 'FAIL_FREE_CHAMPIONS_FETCH'
    }
    dispatch(championsFetch('http://localhost:3001/champs/free', type));
    //dispatch for previous tickets
  }
  componentWillReceiveProps(nextProps){
    if(this.props.userID != nextProps.userID){
      var {dispatch} = this.props;
      var type = {
        start: 'START_TICKET_FETCH',
        complete: 'COMPLETE_TICKET_FETCH',
        fail: 'FAIL_TICKET_FETCH'
      }
      dispatch(ticketFetch(nextProps.userID, type));
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

  render () {
    return (
      <div>
        <Header authToken={this.props.auth}/>
        <div>
          <div className='container'>
            <div className='box-alt'>
              <div className='container__title'>THIS WEEKS FREE CHAMPIONS</div>
                <ChampionDisplay champions={this.props.freeChamps}/>
              <div className='button' onClick={()=>{history.push('/champselect')}}>SUBMIT A NEW CHAMPION TICKET</div>
              <div className='container__title'>PREVIOUS TICKETS</div>
              {this.previousTickets(this.props.tickets)}
            </div>
          </div>
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
    userID: state.user.userID
  };
}
export default connect(mapStateToProps)(DashboardPage);
