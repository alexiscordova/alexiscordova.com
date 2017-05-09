import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { openMenu, closeMenu } from '../../actions/menuActions'
import './style.scss'

@connect((store) => {
  return {
    menu: store.menu
  }
})

class Menu extends Component {
  static propTypes = {
    menu: PropTypes.shape({
      isMenuOpen: PropTypes.bool
    }),
    dispatch: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    if (this.props.menu.isMenuOpen) {
      this.props.dispatch(closeMenu())
    } else {
      this.props.dispatch(openMenu())
    }
  }

  render() {
    const menuClass = classNames('navigation-trigger', {
      'is-open': this.props.menu.isMenuOpen
    })

    return (
      <div data-component="menu" className={menuClass} onClick={this.toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50">
          <g>
            <rect className="line-top" width="50" height="3" y="0" rx="1.5" />
            <rect className="line-middle" width="50" height="3" y="18" rx="1.5" />
            <rect className="line-bottom" width="50" height="3" y="36" rx="1.5" />
          </g>
        </svg>
      </div>
    )
  }
}

export default Menu
