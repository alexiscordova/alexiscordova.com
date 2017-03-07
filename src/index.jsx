import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.scss';

class Index extends React.Component {
  render() {
    const food = 'pizza';
    console.log(`Tonight for dinner, I'd really like ${food}!`);

    return (
      <h1>Hello, World!</h1>
    );
  }
};

export default Index;

ReactDOM.render(<Index />, document.querySelector('#app'));
