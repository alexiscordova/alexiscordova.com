import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.scss';

class GlobalNavigation extends Component {
  render() {
    return (
      <nav data-component="global-navigation" className="no-gutters column-small-12 column-medium-offset-3 column-medium-3">
        <ul role="navigation" className={this.props.menuClass}>
          <li id="about">
            <NavLink to="/about" activeClassName="is-active" title="About Alexis">About</NavLink>
          </li>
          <li id="resume-jump">
            <a href="/#resume" title="Jump to résumé download button">Résumé</a>
          </li>
        </ul>
      </nav>
    );
  }
}

GlobalNavigation.propTypes = {
  menuClass: PropTypes.string
};

export default GlobalNavigation;
