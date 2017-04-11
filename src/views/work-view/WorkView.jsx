import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Hero from '../../components/hero/Hero.jsx';
import Introduction from '../../components/introduction/Introduction.jsx';

class WorkView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hero: {},
      intro: {}
    };
  }

  componentWillMount() {
    let { match } = this.props;

    this.setState({
      hero: require(`../../data/${match.params.project}-hero.json`),
      intro: require(`../../data/${match.params.project}-introduction.json`)
    });
  }

  render() {
    return (
      <section className="block-center content">
        <Helmet>
          <title>Alexis Córdova | Front-End UI/UX Developer | Work</title>
        </Helmet>

        <Hero
          background={this.state.hero.background}
          heroImage={require(`../../assets/images/work/${this.state.hero.backgroundUrl}`)}
          alt={this.state.hero.alt}
        />

        <Introduction
          headline={this.state.intro.headline}
          text={this.state.intro.text}
        />
      </section>
    )
  }
};

export default WorkView;
