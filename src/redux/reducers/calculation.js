import { CALCULATION_TYPE } from "../actions";

const calculation = (
  state = { currentValue: 0, lastPressedFunction: "" },
  action
) => {
  const { value, type } = action;

  if (type === CALCULATION_TYPE.EQUALS) {
    return { ...state, lastPressedFunction: "" };
  }

  if (type === CALCULATION_TYPE.UPDATE_CURRENT_VALUE) {
    return { ...state, currentValue: value };
  }

  // handle any calculation input, or return state if unexpected input
  return CALCULATION_TYPE[type]
    ? { ...state, lastPressedFunction: type }
    : state;
};

export default calculation;
