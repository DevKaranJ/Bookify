import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleRegistration = async () => {
    const userData = { name, email, password };

    try {
      // Perform client-side validation if needed

      // Send registration data to server
      const response = await fetch("api/register", {
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

      // Registration successful, redirect to login page
      history.push('/Login');

      // Optionally, handle response data
      const result = await response.json();
      localStorage.setItem("user-info", JSON.stringify(result));
    } catch (error) {
      console.error('Error during registration:', error.message);
      // Optionally, display an error message to the user
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">SignUp</h1>
      <p className="text-center">Welcome to Bookify Registration Page</p>
      <form onSubmit={handleRegistration} className="mt-8 max-w-md mx-auto">
        <label className="block mb-4">
          <span className="text-gray-700">Enter your Name:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input mt-1 block w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
            placeholder="Enter your Name"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Enter your Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input mt-1 block w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
            placeholder="Enter your Email"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Enter your Password:</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input mt-1 block w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
            placeholder="Enter your Password"
            required
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-6 focus:outline-none focus:shadow-outline"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
