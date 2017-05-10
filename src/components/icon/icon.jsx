import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

  render() {
    return (
      <a href={this.props.link} data-component="icon">
        <svg className={this.props.className} width={this.props.width} height={this.props.height}>
          <use xlinkHref={`#icon-${this.props.name}`} />
        </svg>
      </a>
    )
  }
}

export default Icon
