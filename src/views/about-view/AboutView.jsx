import React from 'react';
import { Helmet } from 'react-helmet';

import Hero from '../../components/hero/Hero.jsx';
import BodyCopy from '../../components/body-copy/BodyCopy.jsx';

class AboutView extends React.Component {
  render() {
    return (
      <section className="block-center content">
        <Helmet>
          <title>Alexis Córdova | Front-End UI/UX Developer | About Alexis</title>
        </Helmet>

        <Hero />

        <BodyCopy />
      </section>
    )
  }
};

export default AboutView;
