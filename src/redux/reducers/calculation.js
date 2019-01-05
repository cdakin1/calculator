import { CALCULATION_TYPE } from "../actions";

const calculation = (state = 0, action) => {
  const { value, type } = action;
  switch (type) {
    case CALCULATION_TYPE.ADD:
      return state + value;
    case CALCULATION_TYPE.SUBTRACT:
      return state - value;
    case CALCULATION_TYPE.MULTIPLY:
      return state * value;
    case CALCULATION_TYPE.DIVIDE:
      return state / value;
    default:
      return state;
  }
};

export default calculation;
