import reducer from "../src/redux/reducers/memory";

describe("memory reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  describe("when adding to memory", () => {
    it("should add the new value to state", () => {
      expect(reducer([1, 46], { type: "ADD_TO_MEMORY", payload: 55 })).toEqual([
        1,
        46,
        55
      ]);
    });

    it("should move to the front of memory if value already exists", () => {
      expect(
        reducer([1, 33, 46, 12], { type: "ADD_TO_MEMORY", payload: 33 })
      ).toEqual([1, 46, 12, 33]);
    });
  });

  describe("when removing from memory", function() {
    it("should remove the value from state", () => {
      expect(
        reducer([345, 66, 55, 12], { type: "REMOVE_FROM_MEMORY", payload: 55 })
      ).toEqual([345, 66, 12]);
    });

    it("should should not modify state if value does not exist", () => {
      expect(
        reducer([345, 66, 55, 12], { type: "REMOVE_FROM_MEMORY", payload: 1 })
      ).toEqual([345, 66, 55, 12]);
    });
  });
});
