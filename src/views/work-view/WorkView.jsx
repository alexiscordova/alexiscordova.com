import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Hero from '../../components/hero/Hero.jsx';
import Introduction from '../../components/introduction/Introduction.jsx';
import Screenshot from '../../components/screenshot/Screenshot.jsx';
import CodePen from '../../components/codepen/CodePen.jsx';

class WorkView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hero: {},
      intro: {},
      screenshots: {}
    };
  }

  componentWillMount() {
    let { match } = this.props;

    this.setState({
      hero: require(`../../data/${match.params.project}-hero.json`),
      intro: require(`../../data/${match.params.project}-introduction.json`),
      screenshots: require(`../../data/${match.params.project}-screenshots.json`)
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

        { this.state.screenshots.map((screenshot, index) => {
          if (screenshot.type === 'image') {
            return (
              <Screenshot
                key={index}
                imageUrl={screenshot.imageUrl}
                details={screenshot.details}
              />
            );
          } else if (screenshot.type === 'codepen') {
            return (
              <CodePen
                key={index}
                hash={screenshot.hash}
                height={screenshot.height}
                title={screenshot.title}
                caption={screenshot.caption}
              />
            );
          }
        })}
      </section>
    )
  }
};

export default WorkView;
