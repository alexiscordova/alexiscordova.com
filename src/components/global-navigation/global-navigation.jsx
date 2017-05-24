import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import ReactGA from 'react-ga'
import './style.scss'

class GlobalNavigation extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    menuClass: PropTypes.string
  }

  constructor(props) {
    super(props)

    this.sendAnalyticsEvent = this.sendAnalyticsEvent.bind(this)
  }

  sendAnalyticsEvent(event, category, label) {
    ReactGA.event({
      category,
      action: event.type,
      label
    })
  }

  render() {
    return (
      <nav data-component="global-navigation" className="no-gutters column-small-12 column-medium-offset-3 column-medium-3">
        <ul role="navigation" className={this.props.menuClass}>
          <li className="navigation-item" id="about" onClick={event => this.sendAnalyticsEvent(event, 'About', 'About Alexis')}>
            <NavLink to="/about" activeClassName="is-active" className="navigation-link" title="About Alexis">About</NavLink>
          </li>
          <li className="navigation-item" id="resume-jump" onClick={event => this.sendAnalyticsEvent(event, 'Résumé', 'Download Résumé')}>
            <a href="https://www.dropbox.com/s/crh7mex1fga03we/cordova_resume.pdf?dl=0" className="navigation-link" title="Jump to résumé download button">Résumé</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default GlobalNavigation
