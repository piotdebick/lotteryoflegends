import React from 'react';
import {connect} from 'react-redux';
import {addChampion, removeChampion, toggleChampion} from 'actions';

class Champion extends React.Component {
  render () {
    var {name, id, champ, chosen, dispatch, clickable, styleThis} = this.props;
    var championClassName;
    if(styleThis){
      championClassName = chosen ? 'list-item__data list-item__data-selected' : 'list-item__data';
    } else {
      championClassName = 'list-item__data';
    }
    var champImage = 'http://ddragon.leagueoflegends.com/cdn/7.17.1/img/champion/' + champ + '.png';
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
          <input className={championClassName} type="image" src={champImage} onChange={()=>{}}/>
      </div>
    )
  }
};

export default connect()(Champion);
