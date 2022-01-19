import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement } from "./counter-actions";

const valueReducer = createReducer(0, {
  [increment]: (state, { payload }) => state + payload,
  [decrement]: (state, { payload }) => state - payload,
});

/* const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case actionTypes.INCREMENT:
      return state + payload;

    case actionTypes.DECREMENT:
      return state - payload;

    default:
      return state;
  }
}; */

const stepReducer = (state = 1, action) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
