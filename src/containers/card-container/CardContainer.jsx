import React, { Component, PropTypes } from 'react';

class CardContainer extends Component {
  render() {
    return (
      <section data-component="card-container">
        <h3>{this.props.headline}</h3>
        {this.props.children}
      </section>
    );
  }
};

CardContainer.propTypes = {
  headline: PropTypes.string
};

CardContainer.defaultProps = {
  headline: 'Subheading'
};

export default CardContainer;
