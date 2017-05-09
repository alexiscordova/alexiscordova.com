import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import Routes from './router'
import store from './store'
import rootReducer from './reducers/index'

import './styles/style.scss'

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component key={module.hot ? new Date() : undefined} />
      </AppContainer>
    </Provider>,
    document.querySelector('#app')
  )
}

render(Routes)

if (module.hot) {
  module.hot.accept()

  module.hot.accept(Routes, () => {
    render(Routes)
  })

  module.hot.accept(rootReducer, () => {
    const nextRootReducer = require('./reducers/index')
    store.replaceReducer(nextRootReducer)
  })
}
