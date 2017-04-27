import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.scss';

class GlobalHeader extends Component {
  render() {
    return (
      <header className="global-header">
        <div className="row container block-center">
          <div className="column">
            <Link to="/" className="logo">
              <img width="40" height="40" src={require('Svg/logo-outline-color.svg')} />
              <h1>
                Alexis Córdova
                <span className="is-hidden">Front-End Web Developer</span>
              </h1>
            </Link>
          </div>

          <div id="navigation-trigger">
            <div className="menu">Menu</div>
          </div>

          <nav className="column">
            <ul role="navigation">
              <li id="about">
                <NavLink to="/about" activeClassName="is-active" title="About Alexis">About</NavLink>
              </li>
              <li id="resume-jump">
                <a href="/#resume" title="Jump to résumé download button">Résumé</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
};

export default GlobalHeader;
