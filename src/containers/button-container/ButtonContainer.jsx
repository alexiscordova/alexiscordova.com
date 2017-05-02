import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'Components/button/Button';

class ButtonContainer extends Component {
  render() {
    return (
      <section data-component="button-container" id={this.props.id}>
        <div className="row container block-center">
          <div className="column-small-12">
            <Button
              classes={this.props.classes}
              link={this.props.link}
              text={this.props.text}
            />
          </div>
        </div>
      </section>
    );
  }
}

ButtonContainer.propTypes = {
  id: PropTypes.string,
  classes: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string
};

export default ButtonContainer;
