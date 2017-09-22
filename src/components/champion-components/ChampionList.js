import React from 'react';
import {connect} from 'react-redux';
import ChampionContainer from './ChampionContainer';

class ChampionList extends React.Component {
  render () {
    var {champions, searchText, chosen} = this.props;
    let isClickable = true;
    if(chosen.length >= 14){
      isClickable = false;
    } else {
      isClickable = true;
    }
    var renderChampions = () => {
       return champions.filter((champion) => {
         var name = champion.name.toLowerCase();
         return searchText.length === 0 || name.indexOf(searchText.toLowerCase()) > -1;
       }).map((champion) => {
        return (
          <li className='list-item list-item__data-hover' key={champion.id}>
            <ChampionContainer styleThis={true} clickable={isClickable} champ={champion.key} {...champion}/>
          </li>
        )
      })
    }
    return (
      <div className='box-alt'>
        <ul className='list-body'>
          {renderChampions()}
        </ul>
      </div>
    )
  }
};

export default connect((state) => {
    return {
      chosen: state.chosen,
      champions: state.league.champions,
      searchText: state.searchText
    };
  }
)(ChampionList);
