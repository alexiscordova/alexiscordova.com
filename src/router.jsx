import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// Components
import AppView from './views/app-view/AppView.jsx';
import HomeView from './views/home-view/HomeView.jsx';
import AboutView from './views/about-view/AboutView.jsx';
import WorkView from './views/work-view/WorkView.jsx';

const history = createBrowserHistory();

// Routes
const routes = () => (
  <Router history={history}>
    <AppView>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/about" component={AboutView} />
        {/* Work root directory redirects to the home page */}
        <Route exact path="/work">
          <Redirect to="/" />
        </Route>
        <Route path="/work/:project" component={WorkView} />
        {/* Error 404 redirects to the home page */}
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </AppView>
  </Router>
);

export default routes;
