import * as actions from "../src/redux/actions";
// import * as types from '../../constants/ActionTypes'

const TYPES = actions.CALCULATION_TYPE;

describe("actions", () => {
  it("should create an action to add", () => {
    const expectedAction = {
      type: "ADD"
    };
    expect(actions.add()).toEqual(expectedAction);
  });
  it("should create an action to subtract", () => {
    const expectedAction = {
      type: "SUBTRACT"
    };
    expect(actions.subtract()).toEqual(expectedAction);
  });
  it("should create an action to multiply", () => {
    const expectedAction = {
      type: "MULTIPLY"
    };
    expect(actions.multiply()).toEqual(expectedAction);
  });
  it("should create an action to divide", () => {
    const expectedAction = {
      type: "DIVIDE"
    };
    expect(actions.divide()).toEqual(expectedAction);
  });
  it("should create an action to equals", () => {
    const expectedAction = {
      type: "EQUALS"
    };
    expect(actions.equals()).toEqual(expectedAction);
  });
  it("should create an action to update current value", () => {
    const expectedAction = {
      type: "UPDATE_CURRENT_VALUE"
    };
    expect(actions.updateCurrentValue()).toEqual(expectedAction);
  });
});
