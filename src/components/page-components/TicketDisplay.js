import React from 'react';
import ChampionDisplay from './ChampionDisplay';


class TicketDisplay extends React.Component {
  renderTitle(type){
    if(type === 'tickets'){
      return <div className='ticket-display__title'>PREVIOUS TICKET SUBMISSIONS</div>
    }
    else {
      return <div className='ticket-display__title'>THIS WEEKS FREE CHAMPIONS</div>
    }
  }

  renderTickets(tickets, type) {
    if(type === 'tickets'){
      if(tickets.length > 0){
        return tickets.map((ticket, i) =>
          <div key={i}>
            <div className='ticket-display__subtitle'>{ticket.createdAt}</div>
            <ChampionDisplay champions={ticket.championPicks}/>
          </div>
        )
      } else {
        return (
          <div className='ticket-display__subtitle'>You haven't submitted any tickets yet!</div>
        )
      }
    } else {
      return <ChampionDisplay champions={tickets}/>
    }
  }

  render() {
    const {customClass, tickets, type} = this.props;
    return (
      <div className={`ticket-display ${customClass}`}>
        {this.renderTitle(type)}
        <div className='ticket-display__content'>
          { this.renderTickets(tickets, type)}
        </div>

      </div>
    )
  }
}

export default TicketDisplay;
