import reducer from "../src/redux/reducers/calculation";

const initialState = {
  currentValue: 0,
  lastPayload: undefined,
  lastPressedFunction: undefined,
  previousValue: 0
};
describe("calculation reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle addition", () => {
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

  it("should handle subtraction", () => {
    expect(
      reducer(
        {
          lastPressedFunction: "SUBTRACT",
          previousValue: 150.7,
          currentValue: 50.3,
          lastPayload: null
        },
        { type: "EQUALS", payload: null }
      )
    ).toEqual({
      currentValue: 100.4,
      lastPressedFunction: "EQUALS",
      lastPayload: null,
      previousValue: 150.7
    });
  });

  it("should handle multiplication", () => {
    expect(
      reducer(
        {
          lastPressedFunction: "MULTIPLY",
          previousValue: -5,
          currentValue: 10,
          lastPayload: null
        },
        { type: "EQUALS", payload: null }
      )
    ).toEqual({
      currentValue: -50,
      lastPressedFunction: "EQUALS",
      lastPayload: null,
      previousValue: -5
    });
  });

  it("should handle division", () => {
    expect(
      reducer(
        {
          lastPressedFunction: "DIVIDE",
          previousValue: 144,
          currentValue: 12,
          lastPayload: null
        },
        { type: "EQUALS", payload: null }
      )
    ).toEqual({
      currentValue: 12,
      lastPressedFunction: "EQUALS",
      lastPayload: null,
      previousValue: 144
    });
  });
});
