import { CALCULATION_TYPE } from "../actions";

const calcObject = {
  ADD: "+",
  SUBTRACT: "-",
  MULTIPLY: "*",
  DIVIDE: "/"
};

const calculate = (func, value1, value2) => {
  const result = eval(`${value1} ${calcObject[func]} ${value2}`);
  console.log(func, value1, value2);
  console.log(result);
  return result;
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

  if (
    type === CALCULATION_TYPE.EQUALS &&
    state.lastPressedFunction &&
    state.lastPressedFunction !== CALCULATION_TYPE.EQUALS
  ) {
    return {
      ...state,
      lastPressedFunction: CALCULATION_TYPE.EQUALS,
      currentValue: calculate(
        state.lastPressedFunction,
        state.previousValue,
        state.currentValue
      ),
      lastPayload: payload
    };
  }

  switch (type) {
    case CALCULATION_TYPE.CLEAR:
      return {
        lastPressedFunction: "",
        previousValue: null,
        currentValue: 0,
        lastPayload: null
      };

    case CALCULATION_TYPE.SET_CURRENT_VALUE:
      return {
        ...state,
        currentValue: payload
      };

    case CALCULATION_TYPE.UPDATE_CURRENT_VALUE:
      return {
        ...state,
        currentValue:
          state.currentValue && state.lastPayload
            ? "" + state.currentValue + payload
            : payload,
        lastPayload: payload
      };

    case CALCULATION_TYPE[type]:
      let currentValue = state.currentValue;
      let previousValue = state.previousValue;

      if (
        previousValue &&
        state.lastPressedFunction &&
        state.lastPressedFunction !== CALCULATION_TYPE.EQUALS
      ) {
        currentValue = calculate(
          state.lastPressedFunction,
          state.previousValue,
          currentValue
        );
      } else {
        previousValue = currentValue;
      }

      return {
        lastPressedFunction: type,
        previousValue,
        currentValue,
        lastPayload: payload
      };
    default:
      return state;
  }
};

export default calculation;
