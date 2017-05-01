import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './style.scss';

class Card extends Component {
  render() {
    let hasClient = typeof this.props.client !== 'undefined' ? (
      `${this.props.projectDate} • ${this.props.client}`) : this.props.projectDate,
        classes = this.props.columns.split(' '),
        cardClass = classNames('no-gutters-small', classes);

    return (
      <section data-component="card" className={cardClass}>
        <Link to={this.props.destination}>
          <figure>
            <img src={this.props.image} alt={this.props.alt}/>
            <figcaption>
              <h4>{this.props.title}</h4>
              <h5>{hasClient}</h5>
            </figcaption>
          </figure>
        </Link>
      </section>
    );
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

export default Card;
