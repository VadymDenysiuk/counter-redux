import React from "react";
import { connect } from "react-redux";
import Controls from "./Controls";
import Value from "./Value";
import "./Counter.css";
import * as actions from "../../redux/counter/counter-actions";

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
        step={step}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

const mapDispatchToPropr = (dispatch) => {
  return {
    onIncrement: (value) => dispatch(actions.increment(value)),
    onDecrement: (value) => dispatch(actions.decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToPropr)(Counter);
