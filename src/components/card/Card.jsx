import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let hasClient = typeof this.props.client !== 'undefined' ? `${this.props.projectDate} • ${this.props.client}` : this.props.projectDate;

    return (
      <section data-component="card">
        <Link to={this.props.destination}>
          <figure>
            <img src={this.props.image} alt={this.props.alt}/>
            <figcaption>
              {this.props.title}
              {hasClient}
            </figcaption>
          </figure>
        </Link>
      </section>
    );
  }
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  projectDate: PropTypes.string,
  client: PropTypes.string
};

export default Card;
