import React, { Component, PropTypes } from 'react';
import './style.scss';

class Hero extends Component {
  render() {
    return (
      <section data-component="hero">
        { this.props.background ? (
          <div className={`background-container block-center ${this.props.classes}`}></div>
        ) : (
          <div className="row">
            <div className="column">
              <img src={this.props.heroImage} alt={this.props.alt} />
            </div>
          </div>
        )}
      </section>
    );
  }
}

Hero.propTypes = {
  background: PropTypes.bool.isRequired,
  classes: PropTypes.string,
  alt: PropTypes.string,
  heroImage: PropTypes.string
};

Hero.defaultProps = {
  heroImage: 'http://placehold.it/1900x600',
  alt: 'Missing alt text'
};

export default Hero;
