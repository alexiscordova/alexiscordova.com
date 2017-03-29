import React from 'react';

import Avatar from '../../components/avatar/Avatar.jsx';

import './style.scss';

class Profile extends React.Component {
  render() {
    return (
      <section data-component="profile">
        <div className="profile">
          <Avatar avatarImage="http://placehold.it/250x250" />

          <h2>Alexis Córdova</h2>
          <p>Front-End UI/UX Developer and Maker of Things</p>

          <div className="icon-container">
            <span className="icon">Email</span>
            <span className="icon">Github</span>
            <span className="icon">LinkedIn</span>
            <span className="icon">CodePen</span>
            <span className="icon">Instagram</span>
            <span className="icon">Twitter</span>
          </div>
        </div>
      </section>
    )
  }
};

export default Profile;
