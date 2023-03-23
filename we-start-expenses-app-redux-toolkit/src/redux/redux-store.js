import { configureStore, createSlice } from "@reduxjs/toolkit";

let expensesSlice = createSlice({
  name: "expensesSlice",
  initialState: { expenses: [] },
  reducers: {
    save(state, action) {
      state.expenses = [action.payload, ...state.expenses];
    },
    read(state, action) {
      state.expenses = action.payload;
    },
    delete(state, action) {
      let filteredData = state.expenses.filter(
        (element) => element.id != action.payload
      );
      state.expenses = filteredData;
    },
  },
});
export const reduxStore = configureStore({ reducer: expensesSlice.reducer });
export const expensesActions = expensesSlice.actions;

/**
 * legacy
 * Redux:
 *  - Store with one parameter
 *    - parameter: reducerFunction, has two Parameters:
 *      - 1) state, must have a default value
 *      - 2) action, 
 *            - contains the sent data from UI
 *            - contains the type of action (dispatched) from UI
 * 
 *  - reducuer function:
 *    - contains two parameters
 *      1) state
 *      2) action
 *          - contains the type of dispatched action from UI
 *    - when defined must returen a defaut state
 * 
 *  - useDispatch
 *    - The hook used to create a communication request between UI and Redux Reducer function
 *    - dispatch hook must have an action {type: value} parameter
 *    - when a type sent to reducer function by using dispatch from UI,
 *      - Received action type must be defined in reducer function
 *      - if defined, it will affect the reducer function state
 */