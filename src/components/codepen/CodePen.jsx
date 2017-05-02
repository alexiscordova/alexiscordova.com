import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

class CodePen extends Component {
  render() {
    return (
      <section data-component="codepen">
        <iframe
          height={this.props.height}
          scrolling='no'
          title={this.props.title}
          src={`//codepen.io/acordova/embed/${this.props.hash}/?height=${this.props.height}&theme-id=0&default-tab=result&embed-version=2`}
          frameBorder='no'
          allowTransparency='true'
          allowFullScreen='true'
          style={{width: '100%'}}>
        </iframe>
        <script
          async
          src="https://production-assets.codepen.io/assets/embed/ei.js">
        </script>

        <ReactMarkdown source={this.props.caption} />
      </section>
    );
  }
}

CodePen.propTypes = {
  hash: PropTypes.string,
  height: PropTypes.number,
  title: PropTypes.string,
  caption: PropTypes.string
};

export default CodePen;
