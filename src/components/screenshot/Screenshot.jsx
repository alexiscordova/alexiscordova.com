import React, { Component, PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';

class Screenshot extends Component {
  render() {
    return(
      <section data-component="screenshot">
        <figure>
          <img src={require(`Images/work/${this.props.imageUrl}`)} />
          <figcaption>
            <ReactMarkdown source={this.props.details} />
          </figcaption>
        </figure>
      </section>
    )
  }
};

Screenshot.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  details: PropTypes.string
};

export default Screenshot;
