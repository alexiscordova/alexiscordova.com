import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Avatar extends Component {
  render() {
    return (
      <div className="avatar">
        <figure className="avatar-image">
          <img src={this.props.avatarImage} />
          <figcaption className="text-center">
            <h2>{this.props.name}</h2>
            <p>{this.props.title}</p>
          </figcaption>
        </figure>
      </div>
    );
  }
}

Avatar.propTypes = {
  avatarImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Avatar;
