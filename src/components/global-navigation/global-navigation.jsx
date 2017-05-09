import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.scss';
import { connect } from 'react-redux'
import { addButtonAnimation, removeButtonAnimation } from '../../actions/buttonActions';

@connect(store => {
  return {
    button: store.button
  }
})

class GlobalNavigation extends Component {
  handleClick() {
    if (!this.props.button.isClassAdded) {
      this.props.dispatch(addButtonAnimation('ripple'))

      setTimeout(() => {
        this.props.dispatch(removeButtonAnimation('ripple'))
      }, 3000)
    }
  }

  render() {
    return (
      <nav data-component="global-navigation" className="no-gutters column-small-12 column-medium-offset-3 column-medium-3">
        <ul role="navigation" className={this.props.menuClass}>
          <li className="navigation-item" id="about">
            <NavLink to="/about" activeClassName="is-active" className="navigation-link" title="About Alexis">About</NavLink>
          </li>
          <li className="navigation-item" id="resume-jump" onClick={this.handleClick}>
            <a href="/#resume" className="navigation-link" title="Jump to résumé download button">Résumé</a>
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
