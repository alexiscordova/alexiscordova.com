import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames'
import './style.scss'

@connect(store => {
  return {
    button: store.button
  }
})

class Button extends Component {
  static propTypes = {
    button: PropTypes.shape({
      payload: PropTypes.string,
      isClassAdded: PropTypes.bool
    }),
    classes: PropTypes.string,
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
  }

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
    )
  }
}

export default Button
