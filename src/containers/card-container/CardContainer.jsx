import React, { Component, PropTypes } from 'react';

class CardContainer extends Component {
  render() {
    return (
      <section data-component="card-container">
        <div className="row container block-center">
          <div className="column-small-12">
            <h3 className="card-container-headline">{this.props.headline}</h3>
            {this.props.children}
          </div>
        </div>
      </section>
    );
  }
}

CardContainer.propTypes = {
  headline: PropTypes.string,
  children: PropTypes.element.isRequired
};

CardContainer.defaultProps = {
  headline: 'Subheading'
};

export default CardContainer;
