import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate=useNavigate();
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setCredentials((old) => ({ ...old, [name]: value }));
  };

  const login = (e) => {
    e.preventDefault(); // Prevent form reload
    axios
      .post("https://employeeapi-jnhc.onrender.com/login", {
        email: credentials.email,
        password: credentials.password,
      })
      .then((response) => {
        if (response.data) {
          navigate('/dashboard')
        } else {
          alert("❌ Invalid Credentials");
        }
      })
      .catch(() => alert("⚠️ Something went wrong"));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={login}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={inputHandler}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={inputHandler}
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
