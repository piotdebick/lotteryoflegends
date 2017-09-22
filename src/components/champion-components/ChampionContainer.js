import React from 'react';
import {connect} from 'react-redux';
import {addChampion, removeChampion, toggleChampion} from 'actions';
import Champion from './Champion';

class ChampionContainer extends React.Component {
  render () {
    var {name, id, champ, chosen, dispatch, clickable, styleThis} = this.props;
    var championClassName;
    if(styleThis){
      championClassName = chosen ? 'list-item__data list-item__data-selected' : 'list-item__data';
    } else {
      championClassName = 'list-item__data';
    }
    return (
      <div className={championClassName} onClick={()=>{
        if(clickable || chosen){
          dispatch(toggleChampion(id));
          if(!chosen) {
            dispatch(addChampion({id, champ}));
          } else {
            dispatch(removeChampion(id));
          }
        }
        }}>
          <Champion name={champ}/>
      </div>
    )
  }
};

export default connect()(ChampionContainer);
