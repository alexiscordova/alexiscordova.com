import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from 'Components/icon/icon'
import './style.scss'

class IconContainer extends Component {
  static propTypes = {
    networks: PropTypes.array.isRequired
  }

  render() {
    const { networks } = this.props

    return (
      <div className="icon-container">
        { networks.map(network => {
          return (
            <Icon
              key={network.id}
              className={network.className}
              name={network.name}
              network={network.network}
              link={network.link}
            />
          )
        })}
      </div>
    )
  }
}

export default IconContainer
