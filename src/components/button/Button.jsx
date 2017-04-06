import React, { Component, PropTypes } from 'react';

import './style.scss';

class Button extends Component {
  render() {
    return (
      <button>{this.props.text}</button>
    )
  }
};

Button.propTypes = {
  text: PropTypes.string.isRequired
};

export default Button;
