import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { checkAuthToken } from 'actions';
import axios from 'axios';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
var token = localStorage.getItem('authToken');
if(token){
  store.dispatch(checkAuthToken(token));
}
var listener = () => {
  var state = store.getState();
  if (state.auth.isAuthenticated) {
    renderApp();
    if (history.location.pathname === '/'
    ||  history.location.pathname === '/login'
    || history.location.pathname === '/register'
    ) {
      history.push('/dashboard');
    }
  } else {
    renderApp();
    history.push('/');
  }
}

store.subscribe(listener);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(jsx, document.getElementById('app'));
