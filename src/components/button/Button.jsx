import React, { Component, PropTypes } from 'react';

import './style.scss';

class Button extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.open(this.props.link)
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.props.text}</button>
    )
  }
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Button;
