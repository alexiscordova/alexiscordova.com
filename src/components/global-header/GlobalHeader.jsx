import React from 'react';
import { Link } from 'react-router';

// Component styles
import './style.scss';

class GlobalHeader extends React.Component {
  render() {
    return (
      <header className="global-header">
        <div className="container block-center">
          <div className="column">
            <Link to="/" className="logo">
              <img width="40" height="40" src={require('../../assets/svg/logo-outline-color.svg')} />
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
              <li id="resume">
                <Link to="/work" title="Featured Work">Work</Link>
              </li>
              <li id="about">
                <Link to="/about" title="About Alexis">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
};

export default GlobalHeader;
