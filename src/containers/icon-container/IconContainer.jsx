import React, { Component, PropTypes } from 'react';
import Icon from 'Components/icon/Icon';
import './styles.scss';

class IconContainer extends Component {
  render() {
    let { networks } = this.props;

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
    );
  }
}

IconContainer.propTypes = {
  networks: PropTypes.array.isRequired
};

export default IconContainer;
