export const add = () => ({
  type: CALCULATION_TYPE.ADD
});

export const subtract = () => ({
  type: CALCULATION_TYPE.SUBTRACT
});

export const multiply = () => ({
  type: CALCULATION_TYPE.MULTIPLY
});

export const divide = () => ({
  type: CALCULATION_TYPE.DIVIDE
});

export const equals = () => ({
  type: CALCULATION_TYPE.EQUALS
});

export const clear = () => ({
  type: CALCULATION_TYPE.CLEAR
});

export const addToMemory = () => (dispatch, getState) => {
  const { calculation } = getState();

  dispatch({
    type: MEMORY_TYPE.ADD_TO_MEMORY,
    payload: calculation.currentValue
  });
};

export const removeFromMemory = value => ({
  type: MEMORY_TYPE.REMOVE_FROM_MEMORY,
  payload: value
});

export const setCurrentValue = value => ({
  type: CALCULATION_TYPE.SET_CURRENT_VALUE,
  payload: value
});

export const updateCurrentValue = value => ({
  type: CALCULATION_TYPE.UPDATE_CURRENT_VALUE,
  payload: value
});

export const CALCULATION_TYPE = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
  MULTIPLY: "MULTIPLY",
  DIVIDE: "DIVIDE",
  EQUALS: "EQUALS",
  CLEAR: "CLEAR",
  SET_CURRENT_VALUE: "SET_CURRENT_VALUE",
  UPDATE_CURRENT_VALUE: "UPDATE_CURRENT_VALUE"
};

export const MEMORY_TYPE = {
  ADD_TO_MEMORY: "ADD_TO_MEMORY",
  REMOVE_FROM_MEMORY: "REMOVE_FROM_MEMORY"
};
