import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'picturefill'
import 'picturefill/dist/plugins/mutation/pf.mutation.js'

class Picture extends Component {
  static propTypes = {
    smallImage: PropTypes.string,
    smallRetinaImage: PropTypes.string,
    mediumImage: PropTypes.string,
    mediumRetinaImage: PropTypes.string,
    largeImage: PropTypes.string,
    largeRetinaImage: PropTypes.string,
    alt: PropTypes.string
  }

  static defaultProps = {
    smallImage: 'http://placehold.it/350x350?text=small',
    smallRetinaImage: 'http://placehold.it/350x350?text=small+2x',
    mediumImage: 'http://placehold.it/350x350?text=medium',
    mediumRetinaImage: 'http://placehold.it/350x350?text=medium+2x',
    largeImage: 'http://placehold.it/350x350?text=large',
    largeRetinaImage: 'http://placehold.it/700x700?text=large+2x'
  }

  render() {
    return (
      <picture>
        <source
          srcSet={`${this.props.largeImage}, ${this.props.largeRetinaImage} 2x`}
          media="(min-width: 64em)"
          alt={this.props.alt}
        />
        <source
          srcSet={`${this.props.mediumImage}, ${this.props.mediumRetinaImage} 2x`}
          media="(min-width: 40em)"
          alt={this.props.alt}
        />
        <source
          srcSet={`${this.props.smallImage}, ${this.props.smallRetinaImage} 2x`}
          alt={this.props.alt}
        />
        <img src="" alt={this.props.alt} />
        <noscript>
          <img src={this.props.largeImage} alt={this.props.alt} />
        </noscript>
      </picture>
    )
  }
}

export default Picture
