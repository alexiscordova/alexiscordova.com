import { Component } from 'react';
import PropTypes from 'prop-types';

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return null;
  }
}

ScrollToTopOnMount.propTypes = {
  location: PropTypes.object
};

export default ScrollToTopOnMount;
