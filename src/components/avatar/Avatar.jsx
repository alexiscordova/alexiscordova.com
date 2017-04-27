import React, { Component, PropTypes } from 'react';
import './style.scss';

class Avatar extends Component {
  render() {
    return (
      <div className="avatar">
        <img className="avatar-image" src={this.props.avatarImage} />
        <h2>{this.props.name}</h2>
        <p>{this.props.title}</p>
      </div>
    );
  }
};

Avatar.propTypes = {
  avatarImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Avatar;
