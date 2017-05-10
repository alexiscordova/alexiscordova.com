import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Hero from 'Components/hero/hero'
import Introduction from 'Components/introduction/introduction'

class AboutView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      about: {}
    }
  }

  componentWillMount() {
    this.setState({
      about: require('Data/about.json')
    })
  }

  render() {
    const { about } = this.state

    return (
      <section className="block-center content">
        <Helmet>
          <title>Alexis Córdova | Front-End Developer | About Alexis</title>
        </Helmet>

        <Hero
          background={false}
          heroImage={require('Images/about/about-hero-large.jpg')}
          alt="Alexis Córdova"
        />

        <Introduction
          headline={about.headline}
          text={about.text}
        />
      </section>
    )
  }
}

export default AboutView
