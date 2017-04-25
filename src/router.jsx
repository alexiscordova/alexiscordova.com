import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import AppView from './views/app-view/AppView';
import HomeView from './views/home-view/HomeView';
import AboutView from './views/about-view/AboutView';
import WorkView from './views/work-view/WorkView';

const history = createBrowserHistory();

// Routes
const routes = () => (
  <Router history={history}>
    <AppView>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/about" component={AboutView} />
        <Route exact path="/work">
          <Redirect to="/" />
        </Route>
        <Route path="/work/:project" component={WorkView} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </AppView>
  </Router>
);

export default routes;
