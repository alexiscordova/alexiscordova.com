import React, { Component } from 'react'
import './style.scss'

class GlobalFooter extends Component {
  render() {
    const currentYear = new Date().getFullYear()

    return (
      <footer className="global-footer">
        <div className="row container block-center">
          <div className="column-small-12">
            <small className="footer-text">
              © 2001-{currentYear}
              <span className="author-metadata">Alexis Córdova • Made in San Francisco</span>
            </small>
          </div>
        </div>
      </footer>
    )
  }
}

export default GlobalFooter
