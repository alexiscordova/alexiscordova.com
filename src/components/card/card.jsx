import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import ReactGA from 'react-ga'
import './style.scss'

class Card extends Component {
  static propTypes = {
    columns: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    retinaImageUrl: PropTypes.string.isRequired,
    alt: PropTypes.string,
    title: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    projectDate: PropTypes.string,
    client: PropTypes.string
  }

  constructor(props) {
    super(props)

    this.sendAnalyticsEvent = this.sendAnalyticsEvent.bind(this)
  }

  sendAnalyticsEvent(event) {
    ReactGA.event({
      category: 'Card',
      action: event.type,
      label: this.props.title
    })
  }

  render() {
    const classes = this.props.columns.split(' '),
          cardClass = classNames('no-gutters-small', classes),
          componentHasClient = typeof this.props.client !== 'undefined'

    return (
      <section data-component="card" className={cardClass} onClick={(event) => this.sendAnalyticsEvent(event)}>
        <Link to={this.props.destination} className="card-link">
          <figure>
            <img
              className="card-image"
              srcSet={`${this.props.imageUrl}, ${this.props.retinaImageUrl} 2x`}
              alt={this.props.alt}
            />
            <figcaption className="card-caption">
              <h4 className="card-title">{this.props.title}</h4>
              { componentHasClient ? (
                <p className="card-metadata">
                  {this.props.projectDate} • {this.props.client}
                </p>
              ) : (
                <p className="card-metadata">
                  {this.props.projectDate}
                </p>
              )}
            </figcaption>
          </figure>
        </Link>
      </section>
    )
  }
}

export default Card
