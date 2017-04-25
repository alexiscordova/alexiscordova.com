import React, { Component, PropTypes } from 'react';
import './style.scss';

class Avatar extends Component {
  render() {
    return (
      <div className="avatar">
        <img className="avatar-image" src={this.props.avatarImage} />
      </div>
    );
  }
};

Avatar.propTypes = {
  avatarImage: PropTypes.string.isRequired
};

export default Avatar;
