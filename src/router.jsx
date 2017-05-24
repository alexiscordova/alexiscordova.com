import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Route, Redirect, Switch } from 'react-router'
import { HashRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import { closeMenu } from './actions/menuActions'
import AppView from './views/app-view/app-view'
import HomeView from './views/home-view/home-view'
import AboutView from './views/about-view/about-view'
import WorkView from './views/work-view/work-view'
import ReactGA from 'react-ga'

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

  constructor(props) {
    super(props)

    ReactGA.initialize('UA-347921-4')
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
      <HashRouter>
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
      </HashRouter>
    )
  }
}

export default Routes
