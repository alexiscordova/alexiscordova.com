import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

class Hero extends Component {
  render() {
    let classes = this.props.background ? this.props.classes.split(' ') : '',
        heroClass = classNames('hero-background-image', 'block-center', classes);

    return (
      <section data-component="hero" data-project={this.props.project}>
        { this.props.background ? (
          <div className={heroClass}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon fill="#fff" points="0, 100 100, 0 100, 100" />
            </svg>
          </div>
        ) : (
          <div className="row container block-center">
            <div className="no-gutters column-small-12">
              <img className="hero-image" src={this.props.heroImage} alt={this.props.alt} />
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
