import React from "react";
/* import { connect } from "react-redux"; */
import { useSelector, useDispatch } from "react-redux";
import Controls from "./Controls";
import Value from "./Value";
import * as actions from "../../redux/counter/counter-actions";
import { getValue } from "../../redux/counter/counter-selectors";
import { getStep } from "../../redux/counter/counter-selectors";
import "./Counter.css";

export default function Counter() {
  const value = useSelector(getValue);
  const step = useSelector(getStep);
  const dispatch = useDispatch();

  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        onIncrement={() => dispatch(actions.increment(step))}
        onDecrement={() => dispatch(actions.decrement(step))}
        step={step}
      />
    </div>
  );
}

/* const mapStateToProps = (state) => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
}; */

/* const mapDispatchToPropr = (dispatch) => {
  return {
    onIncrement: (value) => dispatch(actions.increment(value)),
    onDecrement: (value) => dispatch(actions.decrement(value)),
  };
}; */

/* export default connect(mapStateToProps, mapDispatchToPropr)(Counter); */
