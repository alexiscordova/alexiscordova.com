import React from 'react';
import { Helmet } from 'react-helmet';

import Hero from '../../components/hero/Hero.jsx';
import Introduction from '../../components/introduction/Introduction.jsx';

class WorkView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hero: {}
    };
  }

  componentWillMount() {
    let { match } = this.props;

    this.setState({
      hero: require(`../../data/${match.params.project}-hero.json`)
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

        <Introduction />
      </section>
    )
  }
};

export default WorkView;
