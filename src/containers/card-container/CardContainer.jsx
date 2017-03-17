import React from 'react';

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="card-container">
        <h3>{this.props.headline}</h3>
        {this.props.children}
      </section>
    )
  }
};

CardContainer.propTypes = {
  headline: React.PropTypes.string
};

CardContainer.defaultProps = {
  headline: 'Subheadingw'
};

export default CardContainer;
