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
  UPDATE_CURRENT_VALUE: "UPDATE_CURRENT_VALUE"
};
