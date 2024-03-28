import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    incrementCounter: (state) => {
      return (state += 1);
    },

    decrementCounter: (state) => (state -= 1),
    reset: () => 0,
  },
});

export const { incrementCounter, decrementCounter, reset } =
  counterSlice.actions;
export default counterSlice.reducer;
