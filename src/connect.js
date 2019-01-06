import { connect } from "react-redux";
import {
  add,
  subtract,
  multiply,
  divide,
  equals,
  clear,
  addToMemory,
  removeFromMemory,
  setCurrentValue,
  updateCurrentValue
} from "./redux/actions";
import Calculator from "./calculator";

const mapStateToProps = state => ({
  currentResult: state.calculation,
  memory: state.memory
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add: () => dispatch(add()),
    subtract: () => dispatch(subtract()),
    multiply: () => dispatch(multiply()),
    divide: () => dispatch(divide()),
    equals: () => dispatch(equals()),
    clear: () => dispatch(clear()),
    addToMemory: () => dispatch(addToMemory()),
    removeFromMemory: value => dispatch(removeFromMemory(value)),
    setCurrentValue: value => dispatch(setCurrentValue(value)),
    updateCurrentValue: value => dispatch(updateCurrentValue(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);
