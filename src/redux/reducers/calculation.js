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
  state = {
    previousValue: null,
    currentValue: 0,
    lastPressedFunction: "",
    lastPayload: null
  },
  action
) => {
  const { payload, type } = action;
  console.log(state);

  if (type === CALCULATION_TYPE.CLEAR) {
    return {
      lastPressedFunction: "",
      previousValue: null,
      currentValue: 0,
      lastPayload: null
    };
  }

  if (type === CALCULATION_TYPE.EQUALS && state.lastPressedFunction) {
    return {
      lastPressedFunction: "",
      currentValue: calculate(
        state.lastPressedFunction,
        state.previousValue,
        state.currentValue
      ),
      lastPayload: payload
    };
  }

  if (type === CALCULATION_TYPE.UPDATE_CURRENT_VALUE) {
    return {
      ...state,
      currentValue:
        state.currentValue && state.lastPayload
          ? "" + state.currentValue + payload
          : payload,
      previousValue:
        state.currentValue && state.lastPressedFunction
          ? state.currentValue
          : state.previousValue,
      lastPayload: payload
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
      currentValue,
      lastPayload: payload
    };
  }

  return state;
};

export default calculation;
