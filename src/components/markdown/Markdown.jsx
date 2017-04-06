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
            <ReactMarkdown source={this.props.markdown} />
          </div>
        </div>
      </section>
    );
  }
};

Markdown.propTypes = {
  markdown: PropTypes.string
};

Markdown.defaultProps = {
  markdown: '# This is a header in markdown\n\nAnd this is a paragraph'
}

export default Markdown;
