import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: null, error: null
    },
    reducers: {
        registerUser: (state, action) => {
            state.userInfo = action.payload;
        },
        registerError: (state, action) => {
            state.error = action.payload;
        },
        loginUser: (state, action) => {
            state.userInfo = action.payload;
        },
        loginError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { registerUser, registerError, loginUser, loginError } = userSlice.actions;
export default userSlice.reducer;