import React from 'react';
import { Link } from 'react-router';

import GlobalHeader from '../../components/global-header/GlobalHeader.jsx';
import GlobalFooter from '../../components/global-footer/GlobalFooter.jsx';

class Application extends React.Component {
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
};

export default Application;
