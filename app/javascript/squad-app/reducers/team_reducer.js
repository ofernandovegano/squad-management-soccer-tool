import { ADD_TEAM } from '../actions';

export default function (state = null, action) {
  
  switch (action.type) {
    case ADD_TEAM:
      return action.payload;
    default:
      return state;
  }
}