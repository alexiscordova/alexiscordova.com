import React from 'react';

// Component Style
import './style.scss';

class BodyCopy extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section data-component="body-copy">
        <div className="row">
          <div className="column">
            <h2>headline</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </section>
    );
  }
};

export default BodyCopy;
