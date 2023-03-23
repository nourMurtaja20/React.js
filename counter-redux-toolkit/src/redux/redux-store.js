import { configureStore, createSlice } from "@reduxjs/toolkit";

let counterslice = createSlice({
  name: "counter-slice",
  initialState: { counter: 0, visible: true },
  reducers: {
    increment(state, action) {
      state.counter = state.counter + 1;
    },
    decrement(state, action) {
      state.counter = state.counter - 1;
    },
    incrementByValue(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state, action) {
      state.visible = !state.visible;
    },
  },
});
//multiReducer
// export const reduxStore = configureStore({
//   reducer: { counterReducer: counterslice.reducer },
// });
export const reduxStore = configureStore({
  reducer: counterslice.reducer,
});
export const counterActions = counterslice.actions;
