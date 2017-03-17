import React from 'react';

import CardContainer from '../../containers/card-container/CardContainer.jsx';

import Hero from '../../components/hero/Hero.jsx';
import BodyCopy from '../../components/body-copy/BodyCopy.jsx';
import Card from '../../components/card/Card.jsx';

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

        <CardContainer>
          <Card
            image={require('../../assets/images/work/primer/primer-promo-large_2x.jpg')}
            title="StubHub Primer"
          />
          <Card
            image={require('../../assets/images/work/sony/sony-promo-large_2x.jpg')}
            title="StubHub Primer"
          />
        </CardContainer>
      </section>
    )
  }
};

export default HomeView;
