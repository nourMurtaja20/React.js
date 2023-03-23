import { createSlice } from "@reduxjs/toolkit";

let authSlic = createSlice({
    name: "auth-slic",
    initialState: { loggedin: localStorage.getItem('loggedin') },
    reducers: {
        login(state, action) {
            state.loggedin = true;
        },
        register(state, action) {
            state.loggedin = true;
        },
        logout(state, action) {
            state.loggedin = false;
        },
    },
});
export const authreducers = authSlic.reducer;
export const authActions = authSlic.actions;
