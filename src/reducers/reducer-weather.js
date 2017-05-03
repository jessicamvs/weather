import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // do no do state.push here
      // state.concat is better because it creates a new array
      // we aren't mutating our state we're returning a new version of our state
      // return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ]; // [ city, city, city ] NOT [ city, [city, city] ]
  }
  return state
}
