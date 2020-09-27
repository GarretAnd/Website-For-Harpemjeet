// keys for actiontypes
export const ActionTypes = {
  INCREMENT: 'INCREMENT', // Action types -> objects that will have keys
  DECREMENT: 'DECREMENT',
};

export function increment() {
  return {
    type: ActionTypes.INCREMENT,
    payload: null,
  };
}

export function decrement() {
  return {
    type: ActionTypes.DECREMENT,
    payload: null,
  };
}
