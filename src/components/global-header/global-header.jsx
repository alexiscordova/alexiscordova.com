import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Menu from 'Components/menu/menu';
import GlobalNavigation from 'Components/global-navigation/global-navigation';
import './style.scss';

class GlobalHeader extends Component {
  constructor(props) {
    super(props);

    this.handleMenuState = this.handleMenuState.bind(this);

    this.state = {
      isMenuOpen: false
    };
import { connect } from 'react-redux'
@connect((store) => {
  return {
    menu: store.menu
  }
})

  }

  render() {
    const menuClass = classNames('menu', {
      'is-open': this.props.menu.isMenuOpen
    })

    return (
      <header data-component="global-header">
        <div className="row container block-center">
          <div className="column-small-10 column-medium-6">
            <Link to="/" className="logo-container">
              <img className="logo-image" width="40" height="40" src={require('Svg/logo-outline-color.svg')} />
              <h1 className="logo-headline heading-h2">
                Alexis Córdova
                <span className="is-hidden">Front-End Web Developer</span>
              </h1>
            </Link>
          </div>

          <div className="column-small-2 is-hidden-medium end">
            <Menu handleMenuState={this.handleMenuState} />
          </div>

          <GlobalNavigation menuClass={menuClass} />
        </div>
      </header>
    );
  }
}

export default GlobalHeader;
