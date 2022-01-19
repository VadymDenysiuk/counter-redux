import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./counter/counter-reducer";
import logger from "redux-logger";

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware,
});

export default store;
