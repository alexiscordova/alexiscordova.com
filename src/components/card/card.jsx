import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import './style.scss'

class Card extends Component {
  render() {
    const classes = this.props.columns.split(' '),
          cardClass = classNames('no-gutters-small', classes);

    return (
      <section data-component="card" className={cardClass}>
        <Link to={this.props.destination} className="card-link">
          <figure>
            <img className="card-image" src={this.props.image} alt={this.props.alt} />
            <figcaption className="card-caption">
              <h4 className="card-title">{this.props.title}</h4>
              { typeof this.props.client !== 'undefined' ? (
                <p className="card-metadata">{this.props.projectDate} • {this.props.client}</p>
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

Card.propTypes = {
  columns: PropTypes.string,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  projectDate: PropTypes.string,
  client: PropTypes.string
};
export default Card
