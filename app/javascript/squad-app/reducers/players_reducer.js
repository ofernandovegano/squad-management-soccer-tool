import { SEARCH_PLAYERS } from '../actions';

export default function (state = null, action) {
  
  switch (action.type) {
    case SEARCH_PLAYERS:
      return action.payload.response;
    default:
      return state;
  }
}