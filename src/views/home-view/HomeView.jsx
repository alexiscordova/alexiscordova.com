import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import CardContainer from '../../containers/card-container/CardContainer.jsx';
import Hero from '../../components/hero/Hero.jsx';
import Introduction from '../../components/introduction/Introduction.jsx';
import Card from '../../components/card/Card.jsx';
import ProfileContainer from '../../containers/profile-container/ProfileContainer.jsx';
import Button from '../../components/button/Button.jsx';

import HomeHero from '../../data/home-hero.json';
import HomeIntro from '../../data/home-introduction.json';
import FeaturedWork from '../../data/featured-work.json';
import OtherWork from '../../data/other-work.json';

const __svg__ = {
  path: '../../assets/svg/*.svg',
  name: '[hash].icons.svg'
};

require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);

class HomeView extends Component {
  render() {
    return(
      <section className="block-center content">
        <Helmet>
          <title>Alexis Córdova | Front-End UI/UX Developer | San Francisco, CA</title>
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
                <div className="column-small column-medium-6" key={project.id}>
                  <Card
                    image={require(`../../assets/images/work/${project.imageUrl}`)}
                    alt={project.alt}
                    title={project.title}
                    projectDate={project.projectDate}
                    client={project.client}
                    destination={project.destinationUrl}
                  />
                </div>
              )
            })}
          </div>
        </CardContainer>

        <CardContainer headline="Other Work">
          <div className="row">
            { OtherWork.map(project => {
              return (
                <div className="column-small column-medium-6" key={project.id}>
                  <Card
                    image={require(`../../assets/images/work/${project.imageUrl}`)}
                    alt={project.alt}
                    title={project.title}
                    projectDate={project.projectDate}
                    client={project.client}
                    destination={project.destinationUrl}
                  />
                </div>
              )
            })}
          </div>
        </CardContainer>

        <ProfileContainer avatarImage={require('../../assets/images/about/profile-avatar.jpg')} />

        <div data-component="button-container" id="resume">
          <Button
            link="https://www.dropbox.com/s/crh7mex1fga03we/cordova_resume.pdf?dl=0"
            text="Download Résumé (PDF)"
          />
        </div>
      </section>
    )
  }
};

export default HomeView;
