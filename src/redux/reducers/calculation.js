import { CALCULATION_TYPE } from "../actions";

const calcObject = {
  ADD: "+",
  SUBTRACT: "-",
  MULTIPLY: "*",
  DIVIDE: "/"
};

const calculate = (func, value1, value2) => {
  return eval(`${value1} ${calcObject[func]} ${value2}`);
};

const calculation = (
  state = { previousValue: null, currentValue: 0, lastPressedFunction: "" },
  action
) => {
  const { payload, type } = action;

  if (type === CALCULATION_TYPE.EQUALS && state.lastPressedFunction) {
    return {
      lastPressedFunction: "",
      currentValue: calculate(
        state.lastPressedFunction,
        state.previousValue,
        state.currentValue
      )
    };
  }

  if (type === CALCULATION_TYPE.UPDATE_CURRENT_VALUE) {
    return {
      ...state,
      currentValue: state.currentValue
        ? "" + state.currentValue + payload
        : payload
    };
  }

  if (CALCULATION_TYPE[type]) {
    let currentValue = state.currentValue;
    let previousValue = state.previousValue;

    if (previousValue && state.lastPressedFunction) {
      currentValue = calculate(
        state.lastPressedFunction,
        state.previousValue,
        currentValue
      );
    } else {
      previousValue = currentValue;
      currentValue = 0;
    }

    return {
      ...state,
      lastPressedFunction: type,
      previousValue,
      currentValue
    };
  }

  return state;
};

export default calculation;
