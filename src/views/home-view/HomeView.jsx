import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import CardContainer from '../../containers/card-container/CardContainer.jsx';
import Hero from '../../components/hero/Hero.jsx';
import Introduction from '../../components/introduction/Introduction.jsx';
import Card from '../../components/card/Card.jsx';
import Profile from '../../components/profile/Profile.jsx';
import Button from '../../components/button/Button.jsx';

import HomeHero from '../../data/home-hero.json';
import HomeIntro from '../../data/home-introduction.json';
import FeaturedWork from '../../data/featured-work.json';
import OtherWork from '../../data/other-work.json';

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

        <Profile />

        <div data-component="button-container" id="resume">
          <Button text="Download Résumé (PDF)" />
        </div>
      </section>
    )
  }
};

export default HomeView;
