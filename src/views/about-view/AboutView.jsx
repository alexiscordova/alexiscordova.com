import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Hero from '../../components/hero/Hero.jsx';
import Introduction from '../../components/introduction/Introduction.jsx';

class AboutView extends Component {
  render() {
    return (
      <section className="block-center content">
        <Helmet>
          <title>Alexis Córdova | Front-End UI/UX Developer | About Alexis</title>
        </Helmet>

        <Hero />

        <Introduction />
      </section>
    )
  }
};

export default AboutView;
