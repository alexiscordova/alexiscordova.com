import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import Hero from 'Components/hero/hero'
import Introduction from 'Components/introduction/introduction'
import Screenshot from 'Components/screenshot/screenshot'
import CodePen from 'Components/codepen/codepen'
import ScrollToTopOnMount from 'Components/scroll-to-top-on-mount/scroll-to-top-on-mount'
import Analytics from '../../analytics'

class WorkView extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        project: PropTypes.string
      })
    })
  }

  constructor(props) {
    super(props)

    this.state = {
      hero: {},
      intro: {},
      screenshots: {}
    }
  }

  componentWillMount() {
    const { match } = this.props

    this.setState({
      hero: require(`Data/${match.params.project}-hero.json`),
      intro: require(`Data/${match.params.project}-introduction.json`),
      screenshots: require(`Data/${match.params.project}-screenshots.json`)
    })
  }

  render() {
    const { hero, intro, screenshots } = this.state

    return (
      <section className="block-center content">
        <Helmet onChangeClientState={newState => { Analytics(newState)}}>
          <title>Alexis Córdova | Front-End Developer | Work</title>
        </Helmet>

        <ScrollToTopOnMount />

        {typeof hero.imageUrl !== 'undefined' &&
          <Hero
            project={this.props.match.params.project}
            background={hero.background}
            heroImage={require(`Images/work/${hero.imageUrl}`)}
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
            )
          } else if (screenshot.type === 'codepen') {
            return (
              <CodePen
                key={index}
                hash={screenshot.hash}
                height={screenshot.height}
                title={screenshot.title}
                caption={screenshot.caption}
              />
            )
          }
        })}
      </section>
    )
  }
}

export default WorkView
