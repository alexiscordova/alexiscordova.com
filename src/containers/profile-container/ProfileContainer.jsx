import React, { Component } from 'react';

import Avatar from '../../components/avatar/Avatar.jsx';
import Icon from '../../components/icon/Icon.jsx';

// Component styles
import './style.scss';

let networks = [
  {
    "id": 1,
    "name": "email",
    "network": "Email",
    "className": "icon-email",
    "link": "mailto:alexis@alexiscordova.com"
  },
  {
    "id": 2,
    "name": "github",
    "network": "GitHub",
    "className": "icon-github",
    "link": "https://github.com/alexiscordova"
  },
  {
    "id": 3,
    "name": "linkedin",
    "network": "LinkedIn",
    "className": "icon-linkedin",
    "link": "https://linkedin.com/in/acordova/"
  },
  {
    "id": 4,
    "name": "codepen",
    "network": "CodePen",
    "className": "icon-codepen",
    "link": "https://codepen.io/acordova/"
  },
  {
    "id": 5,
    "name": "instagram",
    "network": "Instagram",
    "className": "icon-instagram",
    "link": "https://instagram.com/hellacutty"
  },
  {
    "id": 6,
    "name": "twitter",
    "network": "Twitter",
    "className": "icon-twitter",
    "link": "https://twitter.com/acordova"
  }
];

class ProfileContainer extends Component {
  render() {
    return (
      <section data-component="profile">
        <div className="profile">
          <Avatar avatarImage={this.props.avatarImage} />

          <h2>Alexis Córdova</h2>
          <p>Front-End UI/UX Developer and Maker of Things</p>

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
        </div>
      </section>
    )
  }
};

export default ProfileContainer;
