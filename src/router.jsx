import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Components
import AppView from './views/app-view/AppView.jsx';
import HomeView from './views/home-view/HomeView.jsx';
import AboutView from './views/about-view/AboutView.jsx';
import WorkView from './views/work-view/WorkView.jsx';

// Routes
const routes = () => (
  <Router history={browserHistory}>
    <Route component={AppView}>
      <Route path="/" component={HomeView} />
      <Route path="/about" component={AboutView} />
      <Route path="/work" component={HomeView}>
        <Redirect to="/" />
      </Route>
      <Route path="/work/:name" component={WorkView} />
    </Route>
  </Router>
)

export default routes;
