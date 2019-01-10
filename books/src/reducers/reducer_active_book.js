export default function(state = null, action) {
  switch(action.type) {
    case 'SELECT_BOOK':
      return action.title;
    default:
      return state;
  }
}