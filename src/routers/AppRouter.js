import React from 'react';
import { Router, Route, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from 'components/page-components/DashboardPage';
import ChampSelectPage from 'components/page-components/ChampSelectPage';
import NotFoundPage from 'components/page-components/NotFoundPage';
import LoginPage from 'components/page-components/LoginPage';
import RegisterPage from 'components/page-components/RegisterPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PublicRoute path="/register" component={RegisterPage}/>
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PublicRoute path="/champselect" component={ChampSelectPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
