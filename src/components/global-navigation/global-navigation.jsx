import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './style.scss'

class GlobalNavigation extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    menuClass: PropTypes.string
  }

  render() {
    return (
      <nav data-component="global-navigation" className="no-gutters column-small-12 column-medium-offset-3 column-medium-3">
        <ul role="navigation" className={this.props.menuClass}>
          <li className="navigation-item" id="about">
            <NavLink to="/about" activeClassName="is-active" className="navigation-link" title="About Alexis">About</NavLink>
          </li>
          <li className="navigation-item" id="resume-jump">
            <a href="https://www.dropbox.com/s/crh7mex1fga03we/cordova_resume.pdf?dl=0" className="navigation-link" title="Jump to résumé download button">Résumé</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default GlobalNavigation
