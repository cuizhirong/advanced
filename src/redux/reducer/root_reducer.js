import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../action/actions';

//import { SHOW_ALL } from VisibilityFilters;

import { combineReducers } from 'redux';

const initialState = {
  VisibilityFilters: VisibilityFilters.SHOW_ALL,
  todos: []
};

let nextId = 0;

function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      nextId ++;
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: nextId,
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index ===  todo.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }

        return todo;
      });
    default:
      return state;
  }
}

function visibilityFilters(state = VisibilityFilters.SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    default:
      return state;
  }
}

/*export default function todoApp(state = {}, action) {
  return {
    visibilityFilters: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}*/

const todoApp = combineReducers({
  visibilityFilters,
  todos
});

export default todoApp;