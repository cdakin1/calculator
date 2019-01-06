import { camelCase } from "lodash";
import * as actions from "../src/redux/actions";
// import * as types from '../../constants/ActionTypes'

const TYPES = actions.CALCULATION_TYPE;

describe("actions", () => {
  it("should create actions for calculation type", () => {
    for (let key in TYPES) {
      expect(actions[camelCase(key)]().type).toEqual(key);
    }
  });
});
