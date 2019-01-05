import reducer from "../src/redux/reducers/calculation";

const initialState = {
  previousValue: null,
  currentValue: 0,
  lastPressedFunction: "",
  lastPayload: null
};

describe("calculation reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle ADD", () => {
    expect(reducer(initialState, { type: "ADD", payload: null })).toEqual({
      previousValue: 0,
      currentValue: 0,
      lastPressedFunction: "ADD",
      lastPayload: null
    });
  });

  it("should handle EQUALS", () => {
    expect(
      reducer(
        {
          lastPressedFunction: "ADD",
          previousValue: 5,
          currentValue: 10,
          lastPayload: null
        },
        { type: "EQUALS", payload: null }
      )
    ).toEqual({
      currentValue: 15,
      lastPressedFunction: "EQUALS",
      lastPayload: null,
      previousValue: 5
    });
  });
});
