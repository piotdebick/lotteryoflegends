import React from 'react';
import {connect} from 'react-redux';
import {addChampion, removeChampion, toggleChampion} from 'actions';

class Champion extends React.Component {
  render () {
    var {name, id, styleThis, champ, chosen, dispatch} = this.props;
    var championClassName;
    if(styleThis){
      championClassName = chosen ? 'champion champion-selected' : 'champion';
    } else {
      championClassName = 'champion champion-chosen';
    }
    var champImage = 'http://ddragon.leagueoflegends.com/cdn/7.17.1/img/champion/' + champ + '.png';
    return (
      <div className={championClassName} onClick={()=>{
        dispatch(toggleChampion(id));
        if(!chosen) {
          dispatch(addChampion({id, champ}));
        } else {
          dispatch(removeChampion(id));
        }
        }}>
          <input className={championClassName} type="image" src={champImage} onChange={()=>{}}/>
      </div>
    )
  }
};

export default connect()(Champion);
