import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';
import { connect } from 'react-redux'
@connect(store => {
  return {
    button: store.button
  }
})

class Button extends Component {
  render() {
    const classes = this.props.classes.split(' '),
          animationClass = this.props.button.payload,
          btnClass = classNames('btn', classes, {
            [animationClass]: this.props.button.isClassAdded
          })

    return (
      <button type="button" className={btnClass} onClick={this.props.handleClick}>
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  classes: PropTypes.string,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Button;
