
import { registerError, registerUser, loginUser, loginError, logoutUser } from "../reducers/userReducer";
import axios from 'axios';
// user registration
export const userRegister = (userData) => async (dispatch, getState, { navigate }) => {
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
      dispatch(registerUser(result)); // Still dispatch for state update
  
      // Redirect after successful registration
      navigate('/Login');
    } catch (error) {
      console.error('Error during registration:', error.message);
      dispatch(registerError(error.message));
    }
  };
  
// user login
export const userLogin = (userData) => async (dispatch) => {
    try {
        const response = await axios.post("http://localhost:3000/api/v1/auth/sign_in", userData, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });

        if (!response.status === 200) {
            throw new Error('Login failed');
        }

        const accessToken = response.headers['access-token'];
        const client = response.headers['client'];
        const uid = response.headers['uid'];
        const userId = response.data.data.id;

        localStorage.setItem('access-token', accessToken);
        localStorage.setItem('client', client);
        localStorage.setItem('uid', uid);
        localStorage.setItem('id', userId);
        dispatch(loginUser(response.data));
    }
    catch (error) {
        console.error('Error during login:', error.message);
        dispatch(loginError(error.message));
    }
};

// user logout
export const userLogout = () => async (dispatch) => {
    try {
        // Additional cleanup tasks if necessary
        localStorage.removeItem('access-token');
        localStorage.removeItem('client');
        localStorage.removeItem('uid');
        
        dispatch(logoutUser());
    }
    catch (error) {
        console.error('Error during logout:', error.message);
    }
};
