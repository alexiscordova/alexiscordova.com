import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

class Avatar extends Component {
  render() {
    return (
      <div data-component="avatar">
        <figure className="avatar">
          <img className="avatar-image" src={this.props.avatarImage} />
          <figcaption className="avatar-caption text-center">
            <h2 className="avatar-name">{this.props.name}</h2>
            <p className="avatar-title">{this.props.title}</p>
          </figcaption>
        </figure>
      </div>
    )
  }
}

Avatar.propTypes = {
  avatarImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
export default Avatar
