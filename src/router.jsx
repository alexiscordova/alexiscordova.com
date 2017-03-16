import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Components
import AppView from './views/app-view/AppView.jsx';
import HomeView from './views/home-view/HomeView.jsx';

// Routes
const routes = () => (
  <Router history={browserHistory}>
    <Route component={AppView}>
      <Route path="/" component={HomeView} />
    </Route>
  </Router>
)

export default routes;
