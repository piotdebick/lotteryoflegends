import React from 'react';
import {connect} from 'react-redux';
import Champion from './Champion';

class ChampionList extends React.Component {
  render () {
    var {champions, searchText} = this.props;
    var renderChampions = () => {
       return champions.filter((champion) => {
         var name = champion.name.toLowerCase();
         return searchText.length === 0 || name.indexOf(searchText.toLowerCase()) > -1;
       }).map((champion) => {
        return (
          <li className='thumbnail' key={champion.id}>
            <Champion styleThis={true} champ={champion.key} {...champion}/>
          </li>
        )
      })
    }
    return (
      <div className="media-object">
        <ul>
          {renderChampions()}
        </ul>
      </div>
    )
  }
};

export default connect((state) => {
    return {
      champions: state.league.champions,
      searchText: state.searchText
    };
  }
)(ChampionList);
