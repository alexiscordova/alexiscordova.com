import React, { Component, PropTypes } from 'react';
import './style.scss';

class Button extends Component {
  handleClick() {
    window.open(this.props.link)
  }

  render() {
    return (
      <button
        className={this.props.classes}
        onClick={this.handleClick.bind(this)}
      >
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  classes: PropTypes.string,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Button;
