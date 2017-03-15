import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Routes from './router.jsx';

// Application Styles
import './styles/style.scss';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector('#app')
  );
};

render(Routes);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./router.jsx', () => {
    render(Routes);
  });
}
