import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
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
    let classes = this.props.classes.split(' '),
        btnClass = classNames('btn', classes);

    return (
      <button
        type="button"
        className={btnClass}
        onClick={this.handleClick}
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
