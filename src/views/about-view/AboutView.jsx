import React from 'react';

import Hero from '../../components/hero/Hero.jsx';
import BodyCopy from '../../components/body-copy/BodyCopy.jsx';

class AboutView extends React.Component {
  componentDidMount() {
    let title = document.title;

    document.title = `${title} | San Francisco, CA | About Alexis`;
  }

  render() {
    return (
      <section className="block-center content">
        <Hero />
        <BodyCopy />
      </section>
    )
  }
};

export default AboutView;
