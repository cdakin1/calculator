export const add = value => ({
  type: CALCULATION_TYPE.ADD,
  payload: { value }
});

export const subtract = value => ({
  type: CALCULATION_TYPE.SUBTRACT,
  payload: { value }
});

export const multiply = value => ({
  type: CALCULATION_TYPE.MULTIPLY,
  payload: { value }
});

export const divide = value => ({
  type: CALCULATION_TYPE.DIVIDE,
  payload: { value }
});

export const CALCULATION_TYPE = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
  MULTIPLY: "MULTIPLY",
  DIVIDE: "DIVIDE"
};
