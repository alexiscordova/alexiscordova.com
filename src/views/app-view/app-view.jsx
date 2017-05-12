import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GlobalHeader from 'Components/global-header/global-header'
import GlobalFooter from 'Components/global-footer/global-footer'
import 'picturefill'
import 'picturefill/dist/plugins/mutation/pf.mutation.js'

class Application extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <article className="react-root">
        <GlobalHeader />

        <main>
          {this.props.children}
        </main>

        <GlobalFooter />
      </article>
    )
  }
}

export default Application
