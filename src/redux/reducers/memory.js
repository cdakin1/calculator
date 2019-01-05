const memory = (state = [], action) => {
  const { type, payload } = action;

  if (type && payload) {
    return [...state, payload.value];
  }
  return state;
};

export default memory;
