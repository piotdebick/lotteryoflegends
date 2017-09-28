import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import { championsFetch } from 'actions';
import Header from './Header';
import ChampionList from '../champion-components/ChampionList';
import ChampionSearch from '../champion-components/ChampionSearch';
import ChosenChampions from '../champion-components/ChosenChampions';


class ChampSelectPage extends React.Component {
  componentDidMount () {
    var {dispatch} = this.props;
    let type = {
      start: 'START_CHAMPIONS_FETCH',
      complete: 'COMPLETE_CHAMPIONS_FETCH',
      fail: 'FAIL_CHAMPIONS_FETCH'
    }
    dispatch(championsFetch('https://api.lotteryoflegends.com/champs', type));
  }

  render () {
    return (
          <div className='container'>
            <div className='box'>
              <div className='box__title'>WHICH CHAMPIONS WILL BE FREE NEXT WEEK?</div>
              <ChampionSearch/>
              <ChampionList/>
              <ChosenChampions/>
            </div>
          </div>
    )
  }
};

const mapStateToProps = (state) => {
  return{
    auth: state.auth
  };
}
export default connect(mapStateToProps)(ChampSelectPage);
