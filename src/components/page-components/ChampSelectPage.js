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
    dispatch(championsFetch());
  }

  render () {
    return (
      <div>
        <Header authToken={this.props.auth}/>
        <div>
          <div className='container'>
            <div className='box-alt'>
              <ChampionSearch/>
              <ChampionList/>
              <ChosenChampions/>
            </div>
          </div>
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
