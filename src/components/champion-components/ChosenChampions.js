import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { history } from 'AppRouter';

import {resetChampionState, submissionSuccess} from 'actions';
import ChampionContainer from './ChampionContainer';

class ChosenChampions extends React.Component {
  async submitChampions (chosen) {
    var {dispatch, userID, token} = this.props;
    dispatch(resetChampionState(chosen));
    try{
      await axios.post('http://localhost:3001/pick', {
          "championPicks": chosen,
          "_creator": userID
        }, {
          headers: {
            "x-auth": token
          }
        }
      );
      dispatch(submissionSuccess());
      history.push('/dashboard');
    } catch (e) {
      throw new Error('Could not submit picks');
    }
  }

  render () {
    var {chosen} = this.props;
    var message, className, isDisabled=true;
    if(chosen.length < 14){
      message = `You have ${14-chosen.length} left to choose`;
      className = 'big-button-disabled';
      isDisabled = true;
    } else {
      message = 'Submit Champions!';
      className = 'big-button';
      isDisabled = false;
    }

    var renderChampions = () => {
       return chosen.map((champion) => {
        return (
          <li className='list-item' key={champion.champ}>
            <ChampionContainer styleThis={false} {...champion}/>
          </li>
        )
      })
    }
    return (
      <div className='form'>
        <ul className='list-body list-body-small'>
          <div className='list-body__message'>
            CHOOSE YOUR CHAMPIONS
          </div>
          {renderChampions()}
        </ul>
        <button onClick={() => this.submitChampions(this.props.chosen)}
          disabled={isDisabled}
          className={className}>{message}</button>
      </div>
    )
  }
};

module.exports = connect(
  (state) => {
    return {
      token: state.auth.authToken,
      userID: state.user.userID,
      chosen: state.chosen
    };
  }
)(ChosenChampions);
