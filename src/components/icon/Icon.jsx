import React, { PropTypes, Component } from 'react';
import './style.scss';

class Icon extends Component {
  render() {
    return (
      <a href={this.props.link} className="icon">
        <svg
          className={this.props.className}
          width={this.props.width}
          height={this.props.height}
        >
          <use xlinkHref={`#icon-${this.props.name}`} />
        </svg>
      </a>
    );
  }
};

Icon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  link: PropTypes.string
};

Icon.defaultProps = {
  width: '40',
  height: '40'
};

export default Icon;
