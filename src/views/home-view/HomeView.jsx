import React from 'react';

import CardContainer from '../../containers/card-container/CardContainer.jsx';

import Hero from '../../components/hero/Hero.jsx';
import BodyCopy from '../../components/body-copy/BodyCopy.jsx';
import Card from '../../components/card/Card.jsx';
import Profile from '../../components/profile/Profile.jsx';

import FeaturedWork from '../../../data/featured-work.json';
import OtherWork from '../../../data/other-work.json';

class HomeView extends React.Component {
  componentDidMount() {
    let title = document.title;

    document.title = `${title} | San Francisco, CA`;
  }

  render() {
    return(
      <section className="block-center content">
        <Hero background={true} classes="home" alt="compooter" />

        <BodyCopy />

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
          <button>Download Résumé</button>
        </div>
      </section>
    )
  }
};

export default HomeView;
