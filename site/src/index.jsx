import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routers from './router'
import './style.scss'
import { Provider } from 'react-redux'
import store from './store'

const App = props => (
  <BrowserRouter>
    <Routers />
  </BrowserRouter>
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
