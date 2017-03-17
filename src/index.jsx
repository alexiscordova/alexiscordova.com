import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Routes from './router.jsx';

// Application Styles
import './styles/style.scss';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component key={module.hot ? new Date() : undefined} />
    </AppContainer>,
    document.querySelector('#app')
  );
};

render(Routes);

if (module.hot) {
  module.hot.accept();

  module.hot.accept('./router.jsx', () => {
    render(Routes);
  });
}
