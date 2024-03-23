import { registerError, registerUser } from "../reducers/userReducer";
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