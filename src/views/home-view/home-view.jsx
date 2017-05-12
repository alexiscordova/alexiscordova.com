import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import CardContainer from 'Containers/card-container/card-container'
import Hero from 'Components/hero/hero'
import Introduction from 'Components/introduction/introduction'
import Card from 'Components/card/card'
import Profile from 'Components/profile/profile'
import ButtonContainer from 'Containers/button-container/button-container'
import HomeHero from 'Data/home-hero'
import HomeIntro from 'Data/home-introduction'
import FeaturedWork from 'Data/featured-work'
import OtherWork from 'Data/other-work'

const __svg__ = {
  path: '../../assets/svg/*.svg',
  name: 'icons.svg'
}

require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__)

class HomeView extends Component {
  render() {
    return(
      <section className="block-center content">
        <Helmet>
          <title>Alexis Córdova | Front-End Developer | San Francisco, CA</title>
        </Helmet>

        <Hero
          background={HomeHero.background}
          classes={HomeHero.classes}
          alt={HomeHero.alt}
        />

        <Introduction
          headline={HomeIntro.headline}
          text={HomeIntro.text}
        />

        <CardContainer headline="Featured Work">
          <div className="row">
            { FeaturedWork.map(project => {
              return (
                <Card
                  key={project.id}
                  columns="column-small-12 column-medium-6"
                  imageUrl={require(`Images/work/${project.imageUrl}`)}
                  retinaImageUrl={require(`Images/work/${project.retinaImageUrl}`)}
                  alt={project.alt}
                  title={project.title}
                  projectDate={project.projectDate}
                  client={project.client}
                  destination={project.destinationUrl}
                />
              )
            })}
          </div>
        </CardContainer>

        <CardContainer headline="Other Work">
          <div className="row">
            { OtherWork.map(project => {
              return (
                <Card
                  key={project.id}
                  columns="column-small-12 column-medium-6"
                  imageUrl={require(`Images/work/${project.imageUrl}`)}
                  retinaImageUrl={require(`Images/work/${project.retinaImageUrl}`)}
                  alt={project.alt}
                  title={project.title}
                  projectDate={project.projectDate}
                  client={project.client}
                  destination={project.destinationUrl}
                />
              )
            })}
          </div>
        </CardContainer>

        <Profile
          avatarImageUrl={require('Images/about/profile-avatar.jpg')}
          avatarRetinaImateUrl={require('Images/about/profile-avatar_2x.jpg')}
          name="Alexis Córdova"
          title="Front-End Developer and Maker of Things"
        />

        <ButtonContainer
          classes="btn-block-small block-center"
          id="resume"
          link="https://www.dropbox.com/s/crh7mex1fga03we/cordova_resume.pdf?dl=0"
          text="Download Résumé (PDF)"
        />
      </section>
    )
  }
}

export default HomeView
