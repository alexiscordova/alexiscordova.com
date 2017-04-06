import React, { Component, PropTypes } from 'react';

// Component Style
import './style.scss';

class Introduction extends Component {

  render() {
    return (
      <section data-component="intro">
        <div className="row">
          <div className="column">
            {typeof this.props.headline !== 'undefined' &&
              <h2>{this.props.headline}</h2>
            }
            <p>{this.props.copy}</p>
          </div>
        </div>
      </section>
    );
  }
};

Introduction.propTypes = {
  headline: PropTypes.string,
  copy: PropTypes.string
};

Introduction.defaultProps = {
  copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};

export default Introduction;
