import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Hero from '../../components/hero/Hero.jsx';
import Introduction from '../../components/introduction/Introduction.jsx';

class AboutView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      about: {}
    };
  }

  componentWillMount() {
    this.setState({
      about: require('../../data/about.json')
    });
  }

  render() {
    return (
      <section className="block-center content">
        <Helmet>
          <title>Alexis Córdova | Front-End UI/UX Developer | About Alexis</title>
        </Helmet>

        <Hero
          background={false}
          heroImage={require('../../assets/images/about/about-hero-large.jpg')}
          alt="Alexis Córdova"
        />

        <Introduction text={this.state.about.text} />
      </section>
    )
  }
};

export default AboutView;
