import { connect } from "react-redux";
import { add, subtract, multiply, divide } from "./redux/actions";
import Calculator from "./calculator";

const mapStateToProps = state => ({
  currentResult: state.calculation,
  memory: state.memory
});

const mapDispatchToProps = dispatch => ({
  add: value => dispatch(add(value)),
  subtract: value => dispatch(subtract(value)),
  multiply: value => dispatch(multiply(value)),
  divide: value => dispatch(divide(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);
