import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';

import {
  searchTextReducer,
  chosenReducer,
  leagueReducer,
  authReducer,
  userReducer
} from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      searchText: searchTextReducer,
      chosen: chosenReducer,
      league: leagueReducer,
      auth: authReducer,
      user: userReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
