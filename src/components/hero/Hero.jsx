import React from 'react';

// Component Style
import './style.scss';

class Hero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let content = null,
        children = this.props.children ? <h2>{this.props.children}</h2> : null;

    if (typeof this.props.background !== 'undefined') {
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
  background: React.PropTypes.bool,
  classes: React.PropTypes.string,
  alt: React.PropTypes.string.isRequired
};

export default Hero;
