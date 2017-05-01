import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import './style.scss';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = {
      isMenuOpen: false
    };
  }

  // This sends the current menu state back up to the parent to keep both menu and icon in sync
  // However, this is bizarre syntax and if componentDidUpdate is used, the browser freaks out
  // https://facebook.github.io/react/docs/react-component.html#setstate
  toggleMenu() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    }, () => {
      this.props.handleMenuState(this.state.isMenuOpen);
    });
  }

  render() {
    let menuClass = classNames({
      menu: true,
      'is-open': this.state.isMenuOpen
    });

    return (
      <div className="navigation-trigger">
        <div className={menuClass} onClick={this.toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50">
            <g fillRule="evenodd">
              <rect className="line-top" width="50" height="3" y="0" rx="1.5" />
              <rect className="line-middle" width="50" height="3" y="18" rx="1.5" />
              <rect className="line-bottom" width="50" height="3" y="36" rx="1.5" />
            </g>
          </svg>

        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  handleMenuState: PropTypes.func
}

export default Menu;
