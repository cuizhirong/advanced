import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import reducers from './reducers/rootReducer';
import App from './components/app'
import { createStore } from "redux";

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
);