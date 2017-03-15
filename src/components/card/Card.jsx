import React from 'react';
import { Link } from 'react-router';

// Component Styles
import './style.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section data-component="card">
        <Link to="/" title={this.props.title}>
          <img src={this.props.image} />
        </Link>
      </section>
    );
  }
};

Card.propTypes = {
  image: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
};

export default Card;
