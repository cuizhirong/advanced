import { combineReducers } from 'redux';

import initialReducer from './initialReducer';

function posts(state = initialReducer, action) {
  switch(action.type) {
    default:
      return state;
  }
}

const rootReducers = combineReducers({
  posts
});

export default rootReducers;