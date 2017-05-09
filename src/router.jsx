import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import AppView from './views/app-view/app-view';
import HomeView from './views/home-view/home-view';
import AboutView from './views/about-view/about-view';
import WorkView from './views/work-view/work-view';
import { connect } from 'react-redux'
import { closeMenu } from './actions/menuActions'

const history = createBrowserHistory();

@connect((store) => {
  return {
    menu: store.menu
  }
})

// Routes
class Routes extends Component {
  static propTypes = {
    menu: PropTypes.shape({
      isMenuOpen: PropTypes.bool
    }),
    dispatch: PropTypes.func
  }

  componentDidUpdate() {
    history.listen(() => {
      if (this.props.menu.isMenuOpen) {
        this.props.dispatch(closeMenu())
      }
    })
  }
  render() {
    return (
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
    )
  }
}

export default Routes
