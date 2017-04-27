import React, { Component, PropTypes } from 'react';
import Button from 'Components/button/Button';

class ButtonContainer extends Component {
  render() {
    return (
      <section data-component="button-container" id={this.props.id}>
        <div className="row container block-center">
          <div className="column">
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
