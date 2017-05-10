import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import './style.scss'

class Screenshot extends Component {
  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    details: PropTypes.string
  }

  render() {
    const componentHasDetails = typeof this.props.details !== 'undefined'

    return(
      <section data-component="screenshot">
        <div className="row container block-center">
          <div className="column-small-12">
            <figure className="screenshot">
              <img
                className="screenshot-image"
                src={require(`Images/work/${this.props.imageUrl}`)}
              />
                { componentHasDetails &&
                  <figcaption className="screenshot-caption">
                    <ReactMarkdown source={this.props.details} />
                  </figcaption>
                }
            </figure>
          </div>
        </div>
      </section>
    )
  }
}

export default Screenshot
