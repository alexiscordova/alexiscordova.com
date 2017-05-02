import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import './style.scss';

class Hero extends Component {
  render() {
    let classes = this.props.background ? this.props.classes.split(' ') : '',
        heroClass = classNames('background-container', 'block-center', classes);

    return (
      <section data-component="hero">
        { this.props.background ? (
          <div className={heroClass}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon fill="#fff" points="0, 100 100, 0 100, 100" />
            </svg>
          </div>
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
