import React from 'react';
import { Helmet } from 'react-helmet';

import CardContainer from '../../containers/card-container/CardContainer.jsx';
import Hero from '../../components/hero/Hero.jsx';
import Introduction from '../../components/introduction/Introduction.jsx';
import Card from '../../components/card/Card.jsx';
import Profile from '../../components/profile/Profile.jsx';
import Button from '../../components/button/Button.jsx';

import FeaturedWork from '../../data/featured-work.json';
import OtherWork from '../../data/other-work.json';

class HomeView extends React.Component {
  render() {
    return(
      <section className="block-center content">
        <Helmet>
          <title>Alexis Córdova | Front-End UI/UX Developer | San Francisco, CA</title>
        </Helmet>

        <Hero background={true} classes="home" alt="compooter" />

        <Introduction />

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

        <div className="button-container" id="resume">
          <Button text="Download Résumé (PDF)" />
        </div>
      </section>
    )
  }
};

export default HomeView;
