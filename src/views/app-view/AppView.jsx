import React, { Component, PropTypes } from 'react';
import GlobalHeader from 'Components/global-header/GlobalHeader';
import GlobalFooter from 'Components/global-footer/GlobalFooter';

class Application extends Component {
  render() {
    return (
      <article className="react-root">
        <GlobalHeader />

        <main>
          {this.props.children}
        </main>

        <GlobalFooter />
      </article>
    );
  }
}

Application.propTypes = {
  children: PropTypes.any
}

export default Application;
