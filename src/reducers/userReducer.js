// userReducer.js

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: null,
        isAuthenticated: false,
        userInfo: null, 
       userId: '',
      userRole: 'user',
      error: null
    },
    reducers: {
        registerUser: (state, action) => {
            state.userInfo = action.payload;
            state.isAuthenticated = true; // Set isAuthenticated to true after successful registration
        },
        registerError: (state, action) => {
            state.error = action.payload;
        },
        loginUser: (state, action) => {
            state.userInfo = action.payload;
            state.isAuthenticated = true; // Set isAuthenticated to true after successful login
            state.userId = action.payload.data.id;
            state.userRole = action.payload.data.role;
        },
        loginError: (state, action) => {
            state.error = action.payload;
        },
        logoutUser: (state) => {
            state.userInfo = null;
            state.isAuthenticated = false; // Set isAuthenticated to false after logout
        },
    },
});

export const { registerUser, registerError, loginUser, loginError, logoutUser } = userSlice.actions;
export default userSlice.reducer;
