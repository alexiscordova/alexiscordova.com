import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
