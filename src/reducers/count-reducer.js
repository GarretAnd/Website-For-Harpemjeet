import { ActionTypes } from '../actions';

const CountReducer = (state = 0, action) => { // changes state value by 1
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return state + 1;
    case ActionTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default CountReducer;
