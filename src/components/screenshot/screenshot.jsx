import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

class Screenshot extends Component {
  render() {
    return(
      <section data-component="screenshot">
        <div className="row container block-center">
          <div className="column-small-12">
            <figure className="screenshot">
              <img
                className="screenshot-image"
                src={require(`Images/work/${this.props.imageUrl}`)}
              />
                {typeof this.props.details !== 'undefined' &&
                  <figcaption className="screenshot-caption">
                    <ReactMarkdown source={this.props.details} />
                  </figcaption>
                }
            </figure>
          </div>
        </div>
      </section>
    );
  }
}

Screenshot.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  details: PropTypes.string
};

export default Screenshot;
