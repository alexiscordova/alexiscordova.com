import React from 'react';
import { Helmet } from 'react-helmet';

import Hero from '../../components/hero/Hero.jsx';
import BodyCopy from '../../components/body-copy/BodyCopy.jsx';

class WorkView extends React.Component {
  render() {
    return (
      <section className="block-center content">
        <Helmet>
          <title>Alexis Córdova | Front-End UI/UX Developer | Work</title>
        </Helmet>

        <Hero />

        <BodyCopy />
      </section>
    )
  }
};

export default WorkView;
