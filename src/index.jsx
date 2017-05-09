import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Routes from './router';
import './styles/style.scss';
import { Provider } from 'react-redux'
import store from './store'

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component key={module.hot ? new Date() : undefined} />
      </AppContainer>
    </Provider>,
    document.querySelector('#app')
  );
};

render(Routes);

if (module.hot) {
  module.hot.accept();

  module.hot.accept(Routes, () => {
    render(Routes);
  });
}
