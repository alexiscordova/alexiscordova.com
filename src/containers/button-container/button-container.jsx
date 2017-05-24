import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
import Button from 'Components/button/button'

class ButtonContainer extends Component {
  static propTypes = {
    id: PropTypes.string,
    classes: PropTypes.string,
    link: PropTypes.string,
    text: PropTypes.string
  }

  constructor(props) {
    super(props)

    this.openResumePDF = this.openResumePDF.bind(this)
  }

  sendAnalyticsEvent(event) {
    ReactGA.event({
      category: 'Button',
      action: event.type,
      label: event.target.innerText
    })
  }

  openResumePDF(event) {
    this.sendAnalyticsEvent(event)

    window.open(this.props.link)
  }

  render() {
    return (
      <section data-component="button-container" id={this.props.id}>
        <div className="row container block-center">
          <div className="column-small-12">
            <Button
              classes={this.props.classes}
              handleClick={(event) => { this.openResumePDF(event)}}
              text={this.props.text}
            />
          </div>
        </div>
      </section>
    )
  }
}

export default ButtonContainer
