import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {resetChampionState} from 'actions';
import Champion from './Champion';

class ChosenChampions extends React.Component {
  submitChampions (chosen) {
    var {dispatch} = this.props;
    dispatch(resetChampionState(chosen));
  }

  render () {
    var {chosen} = this.props;
    var message, className, isDisabled=true;
    if(chosen.length < 14){
      message = `You have ${14-chosen.length} left to choose`;
      className = 'button-disabled';
      isDisabled = true;
    } else {
      message = 'Submit Champions!';
      className = 'button';
      isDisabled = false;
    }

    var renderChampions = () => {
       return chosen.map((champion) => {
        return (
          <li className='list-item' key={champion.champ}>
            <Champion styleThis={false} {...champion}/>
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
      chosen: state.chosen
    };
  }
)(ChosenChampions);
