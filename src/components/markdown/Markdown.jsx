import React, { Component, PropTypes } from 'react';

// Component Style
import './style.scss';

class Markdown extends Component {
  render() {
    return (
      <section data-component="markdown">
        <div className="row">
          <div className="column">
            {this.props.markdown}
          </div>
        </div>
      </section>
    );
  }
};

Markdown.propTypes = {
  markdown: PropTypes.string
};

export default Markdown;
