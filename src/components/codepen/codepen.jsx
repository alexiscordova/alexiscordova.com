import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import './style.scss';

class CodePen extends Component {
  render() {
    return (
      <section data-component="codepen">
        <div className="row container block-center">
          <div className="column-small-12 column-large-10 column-large-offset-1">
            <div className="codepen-embed-wrapper block-center">
              <iframe
                scrolling='no'
                title={this.props.title}
                src={`//codepen.io/acordova/embed/${this.props.hash}/?theme-id=0&default-tab=result&embed-version=2`}
                frameBorder='no'
                allowTransparency='true'
                allowFullScreen='true'>
              </iframe>
              <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
            </div>
          </div>

          <div className="column-small-12">
            <ReactMarkdown source={this.props.caption} />
          </div>
        </div>
      </section>
    );
  }
}

CodePen.propTypes = {
  hash: PropTypes.string,
  title: PropTypes.string,
  caption: PropTypes.string
};

export default CodePen;
