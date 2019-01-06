import { MEMORY_TYPE } from "../actions";

const memory = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case MEMORY_TYPE.ADD_TO_MEMORY:
      const newState = state.filter(val => val !== payload);
      return [...newState, payload];
    case MEMORY_TYPE.REMOVE_FROM_MEMORY:
      return state.filter(val => val !== payload);
    default:
      return state;
  }
};

export default memory;
