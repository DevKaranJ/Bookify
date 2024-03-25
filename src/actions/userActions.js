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
        localStorage.setItem('access-token', response.headers.get('access-token'));
        localStorage.setItem('client', response.headers.get('client'));
        localStorage.setItem('uid', response.headers.get('uid'));
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
console.log("response");
        const result = await response.json();
        localStorage.setItem('access-token', response.headers.get('access-token'));
        localStorage.setItem('client', response.headers.get('client'));
        localStorage.setItem('uid', response.headers.get('uid'));
        dispatch(loginUser(result));
    }
    catch (error) {
        console.error('Error during login:', error.message);
        dispatch(loginError(error.message));
    }
};