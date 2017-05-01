import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Menu from 'Components/menu/Menu';
import './style.scss';

class GlobalHeader extends Component {
  constructor(props) {
    super(props);

    this.handleMenuState = this.handleMenuState.bind(this);

    this.state = {
      isMenuOpen: false
    };
  }

  handleMenuState(status) {
    this.setState({
      isMenuOpen: status
    });
  }

  render() {
    return (
      <header data-component="global-header">
        <div className="row container block-center">
          <div className="column-small-10 column-medium-6">
            <Link to="/" className="logo-container">
              <img className="logo-image" width="40" height="40" src={require('Svg/logo-outline-color.svg')} />
              <h1 className="logo-text">
                Alexis Córdova
                <span className="is-hidden">Front-End Web Developer</span>
              </h1>
            </Link>
          </div>

          <div className="column-small-2 is-hidden-medium end">
            <Menu handleMenuState={this.handleMenuState} />
          </div>

          <nav className="column-small-12 column-medium-offset-3 column-medium-3">
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
}

export default GlobalHeader;
