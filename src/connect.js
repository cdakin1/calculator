import { connect } from "react-redux";
import {
  add,
  subtract,
  multiply,
  divide,
  equals,
  updateCurrentValue
} from "./redux/actions";
import Calculator from "./calculator";

const mapStateToProps = state => ({
  currentResult: state.calculation,
  memory: state.memory
});

const mapDispatchToProps = dispatch => ({
  add: () => dispatch(add()),
  subtract: () => dispatch(subtract()),
  multiply: () => dispatch(multiply()),
  divide: () => dispatch(divide()),
  equals: () => dispatch(equals()),
  updateCurrentValue: value => dispatch(updateCurrentValue(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);
