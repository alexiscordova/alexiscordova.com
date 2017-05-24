import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import classNames from 'classnames'
import ReactGA from 'react-ga'
import Menu from 'Components/menu/menu'
import GlobalNavigation from 'Components/global-navigation/global-navigation'
import './style.scss'

@connect((store) => {
  return {
    menu: store.menu
  }
})

class GlobalHeader extends Component {
  static propTypes = {
    menu: PropTypes.shape({
      isMenuOpen: PropTypes.bool
    })
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
    const menuClass = classNames('menu', {
      'is-open': this.props.menu.isMenuOpen
    })

    return (
      <header data-component="global-header">
        <div className="row container block-center">
          <div className="column-small-10 column-medium-6">
            <Link to="/" className="logo-container">
              <img
                className="logo-image"
                src={require('Svg/icon-logo-crown.svg')}
                alt="Crown logo for alexiscordova.com"
                onClick={event => this.sendAnalyticsEvent(event, 'Navigation', 'Site Logo')}
              />
              <h1 className="logo-headline heading-h2" onClick={event => this.sendAnalyticsEvent(event, 'Navigation', 'Alexis Córdova')}>
                Alexis Córdova
                <span className="is-hidden">Front-End Web Developer</span>
              </h1>
            </Link>
          </div>

          <div className="column-small-2 is-hidden-medium end">
            <Menu />
          </div>

          <GlobalNavigation menuClass={menuClass} />
        </div>
      </header>
    )
  }
}

export default GlobalHeader
