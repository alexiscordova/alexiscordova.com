import React, { Component, PropTypes } from 'react';
import './style.scss';

class CardContainer extends Component {
  render() {
    return (
      <section data-component="card-container">
        <div className="row container block-center">
          <div className="column-small-12">
            <h3 className="card-container-headline">{this.props.headline}</h3>
          </div>
        </div>
        <div className="row container block-center">
          {this.props.children}
        </div>
      </section>
    );
  }
}

CardContainer.propTypes = {
  headline: PropTypes.string,
  children: PropTypes.element.isRequired
};

export default CardContainer;
