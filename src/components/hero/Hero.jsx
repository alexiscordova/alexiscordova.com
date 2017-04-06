import React, { Component, PropTypes } from 'react';

// Component Style
import './style.scss';

class Hero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let content = null,
        children = this.props.children ? <h2>{this.props.children}</h2> : null;

    if (this.props.background) {
      content = (
        <div className={`background-container block-center ${this.props.classes}`}>
          {children}
        </div>
      );
    } else {
      content = (
        <div className="row">
          <div className="column">
            <img src={this.props.heroImage} alt={this.props.alt} />
          </div>
        </div>
      );
    }

    return (
      <div data-component="hero">
        {content}
      </div>
    );
  }
};

Hero.propTypes = {
  background: PropTypes.bool,
  classes: PropTypes.string,
  alt: PropTypes.string,
  heroImage: PropTypes.string
};

Hero.defaultProps = {
  heroImage: 'http://placehold.it/1900x600',
  alt: ''
};

export default Hero;
