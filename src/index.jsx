import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './redux/reducer/root_reducer';

import App from './components/app';

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('app'));