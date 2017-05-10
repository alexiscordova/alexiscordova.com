import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import './style.scss'

class Introduction extends Component {
  static propTypes = {
    headline: PropTypes.string,
    text: PropTypes.string
  }

  static defaultProps = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }

  render() {
    const componentHasHeadline = typeof this.props.headline !== 'undefined'

    return (
      <section data-component="intro">
        <div className="row container block-center">
          <div className="column-small-12">
            { componentHasHeadline &&
              <h2 className="intro-headline">{this.props.headline}</h2>
            }

            <ReactMarkdown className="intro-markdown" source={this.props.text} />
          </div>
        </div>
      </section>
    )
  }
}

export default Introduction
