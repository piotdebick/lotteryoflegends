import React from 'react';
import {connect} from 'react-redux';
import {setSearchText} from 'actions';

class ChampionSearch extends React.Component {
  render () {
    var {dispatch, searchText} = this.props;
    return (
      <div className="content-container">
        <div>
          <input type="search" ref="searchText" placeholder="Search Champions" value={searchText} onChange={ ()=>{
            var searchText = this.refs.searchText.value;
            dispatch(setSearchText(searchText));
          }}/>
          <button className="button" onClick={()=>{
            dispatch(setSearchText(""));
          }}>X</button>
        </div>
      </div>
    )
  }
};

export default connect(
  (state) => {
    return {
      searchText: state.searchText
    }
  }
)(ChampionSearch);
