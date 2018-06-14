// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Home from './components/Routes/Home';
import Page404 from './components/Routes/Page404';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route component={Page404} />
    </Switch>
  </App>;

export default AppRoutes;
