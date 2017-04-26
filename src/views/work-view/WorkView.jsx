import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Hero from 'Components/hero/Hero';
import Introduction from 'Components/introduction/Introduction';
import Screenshot from 'Components/screenshot/Screenshot';
import CodePen from 'Components/codepen/CodePen';

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
      hero: require(`Data/${match.params.project}-hero.json`),
      intro: require(`Data/${match.params.project}-introduction.json`),
      screenshots: require(`Data/${match.params.project}-screenshots.json`)
    });
  }

  render() {
    let { hero, intro, screenshots } = this.state;

    return (
      <section className="block-center content">
        <Helmet>
          <title>Alexis Córdova | Front-End UI/UX Developer | Work</title>
        </Helmet>

        {typeof hero.backgroundUrl !== 'undefined' &&
          <Hero
            background={hero.background}
            heroImage={require(`Images/work/${hero.backgroundUrl}`)}
            alt={hero.alt}
          />
        }

        <Introduction
          headline={intro.headline}
          text={intro.text}
        />

        { screenshots.map((screenshot, index) => {
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
    );
  }
};

export default WorkView;
