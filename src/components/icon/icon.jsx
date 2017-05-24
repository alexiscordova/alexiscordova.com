import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
import './style.scss'

class Icon extends Component {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    link: PropTypes.string
  }

  static defaultProps = {
    width: '40',
    height: '40'
  }

  constructor(props) {
    super(props)

    this.sendAnalyticsEvent = this.sendAnalyticsEvent.bind(this)
  }

  sendAnalyticsEvent(event) {
    ReactGA.event({
      category: 'Icon',
      action: event.type,
      label: `${this.props.name} icon`
    })
  }

  render() {
    return (
      <a href={this.props.link} data-component="icon" onClick={event => this.sendAnalyticsEvent(event)}>
        <svg className={this.props.className} width={this.props.width} height={this.props.height}>
          <use xlinkHref={`#icon-${this.props.name}`}>{this.props.name}</use>
        </svg>
      </a>
    )
  }
}

export default Icon
