import {
  REQUEST_POST,
  SUCCESS_POST,
  FAILED_POST
} from '../actions/action'

const weatherReducer = function(state = {}, action) {
  console.log(action)
  switch(action.type) {
    default:
      return state;
  }
}

export default weatherReducer;