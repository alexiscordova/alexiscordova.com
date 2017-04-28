import React, { Component, PropTypes } from 'react';
import Avatar from 'Components/avatar/Avatar';
import IconContainer from 'Containers/icon-container/IconContainer';
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
        <div className="row container block-center">
          <div className="column-small-12">
            <Avatar
              avatarImage={this.props.avatarImage}
              name={this.props.name}
              title={this.props.title}
            />
          </div>

          <div className="column-small-12 column-medium-offset-3 column-medium-6">
            <IconContainer networks={networks} />
          </div>
        </div>
      </section>
    );
  }
}

ProfileContainer.propTypes = {
  avatarImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
export default ProfileContainer;
