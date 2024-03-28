import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./Slices/counterSliceReducer";

const store = configureStore({
  reducer: {
    count: counterSliceReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
