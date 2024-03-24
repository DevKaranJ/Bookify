import { registerError, registerUser, loginUser, loginError } from "../reducers/userReducer";

// user registration
export const userRegister = (userData) => async (dispatch) => {
    try {
        const response = await fetch("http://localhost:3000/api/v1/auth", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Registration failed');
        }

        const result = await response.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        dispatch(registerUser(result));
    }
    catch (error) {
        console.error('Error during registration:', error.message);
        dispatch(registerError(error.message));
    }
};

// user login
export const userLogin = (userData) => async (dispatch) => {
    try {
        const response = await fetch("http://localhost:3000/api/v1/auth/sign_in", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const result = await response.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        dispatch(loginUser(result));
    }
    catch (error) {
        console.error('Error during login:', error.message);
        dispatch(loginError(error.message));
    }
};