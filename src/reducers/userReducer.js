import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: null, userId: '', userRole: 'user', error: null
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
            state.userId = action.payload.data.id;
            state.userRole = action.payload.data.role;
        },
        loginError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { registerUser, registerError, loginUser, loginError } = userSlice.actions;
export default userSlice.reducer;