import React from 'react';
import {connect} from 'react-redux';
import Champion from './Champion';

class ChosenChampions extends React.Component {
  render () {
    var {chosen} = this.props;
    var renderChampions = () => {
       return chosen.map((champion) => {
        return (
          <li className='thumbnail' key={champion.champ}>
            <Champion styleThis={false} {...champion}/>
          </li>
        )
      })
    }
    return (
      <form>
        <div className="media-object content-container">
          <ul>
            {renderChampions()}
          </ul>
        </div>
        <button className="button expanded">Add Champions</button>
      </form>
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
