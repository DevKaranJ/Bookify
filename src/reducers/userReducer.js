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
    },
});

export const { registerUser, registerError } = userSlice.actions;
export default userSlice.reducer;