import React, { Component, PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';

// Component Style
import './style.scss';

class Markdown extends Component {
  render() {
    return (
      <section data-component="markdown">
        <div className="row">
          <div className="column">
            {typeof this.props.headline !== 'undefined' &&
              <h2>{this.props.headline}</h2>
            }
            <ReactMarkdown source={this.props.markdown} />
          </div>
        </div>
      </section>
    );
  }
};

Markdown.propTypes = {
  headline: PropTypes.string,
  markdown: PropTypes.string
};

Markdown.defaultProps = {
  markdown: '# This is a header in markdown\n\nAnd this is a paragraph'
}

export default Markdown;
