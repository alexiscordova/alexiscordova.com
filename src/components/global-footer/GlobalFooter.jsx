import React, { Component } from 'react';
import './style.scss';

class GlobalFooter extends Component {
  render() {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="global-footer">
        <div className="container block-center">
          <small>
            © 2001-{currentYear}
            <span className="author-metadata">Alexis Córdova • Made in San Francisco</span>
          </small>
        </div>
      </footer>
    );
  }
};

export default GlobalFooter;
