import React from 'react';
import { Router, Route, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from 'components/page-components/DashboardPage';
import ChampSelectPage from 'components/page-components/ChampSelectPage';
import NotFoundPage from 'components/page-components/NotFoundPage';
import LoginPage from 'components/page-components/LoginPage';
import RegisterPage from 'components/page-components/RegisterPage';
import Header from 'components/page-components/Header';
import AboutPage from 'components/page-components/AboutPage';
import HomePage from 'components/page-components/HomePage';
import Aside from 'components/page-components/Aside';
import Footer from 'components/page-components/Footer';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div className='wrapper'>
      <Header class={'header'}/>
      <div className='wrapper-main'>
        <Switch>
          <PublicRoute path="/" component={HomePage} exact={true} />
          <PublicRoute path="/login" component={LoginPage}/>
          <PublicRoute path="/register" component={RegisterPage}/>
          <PrivateRoute path="/dashboard" component={DashboardPage} />
          <PrivateRoute path="/champselect" component={ChampSelectPage} />
          <Route path="/about" component={AboutPage}/>
        </Switch>
      </div>
      <Aside class={'aside aside-1'}/>
      <Aside class={'aside aside-2'}/>
      <Footer/>
    </div>
  </Router>
);

export default AppRouter;
