import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

class Avatar extends Component {
  static propTypes = {
    avatarImageUrl: PropTypes.string.isRequired,
    avatarRetinaImateUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    return (
      <div data-component="avatar">
        <figure className="avatar">
          <img
            className="avatar-image"
            srcSet={`${this.props.avatarImageUrl}, ${this.props.avatarRetinaImateUrl} 2x`}
          />
          <figcaption className="avatar-caption text-center">
            <h2 className="avatar-name">{this.props.name}</h2>
            <p className="avatar-title">{this.props.title}</p>
          </figcaption>
        </figure>
      </div>
    )
  }
}

export default Avatar
