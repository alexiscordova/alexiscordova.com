import React from 'react';
import { Link } from 'react-router';

// Component Styles
import './style.scss';

class Card extends React.Component {
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
  image: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  destination: React.PropTypes.string.isRequired,
  projectDate: React.PropTypes.string,
  client: React.PropTypes.string
};

export default Card;
