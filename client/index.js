import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './components/App'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = [ ReduxThunk ]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('index')
)
