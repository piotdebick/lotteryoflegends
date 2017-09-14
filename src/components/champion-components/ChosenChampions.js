import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Champion from './Champion';

class ChosenChampions extends React.Component {
  constructor () {
    super();
    this.state = {error: '', buttonMessage: ''};
  }
  submitChampions (chosen) {
    if(chosen.length === 14){
      console.log('success');
    }
    else {
      this.setState ({ error: `You have ${14 - chosen.length} left to choose!` });
    }
  }
  componentDidUpdate(){
    var {chosen} = this.props;
    let notPicked = 14 - chosen.length;
    if(notPicked === 0) {
      this.setState ({ buttonMessage: `Submit Champions!` });
    } else {
      this.setState ({ buttonMessage: `You have ${notPicked} left to choose!` });
    }
  }
  render () {
    var {chosen} = this.props;
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
        <div className='error'>{this.state.error}</div>
        <button onClick={() => this.submitChampions(this.props.chosen)} className='button'>{this.state.buttonMessage}</button>
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
