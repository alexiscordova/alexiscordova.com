import React from 'react';

import './style.scss';

class Avatar extends React.Component {
  render() {
    return (
      <div className="avatar">
        <img className="avatar-image" src={this.props.avatarImage} />
      </div>
    )
  }
};

Avatar.propTypes = {
  avatarImage: React.PropTypes.string.isRequired
}

export default Avatar;
