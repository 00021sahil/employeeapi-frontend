import React, { useState } from "react";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setEmployee((old) => ({ ...old, [name]: value }));
  };

  const registerEmployee = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/register", {
        name: employee.name,
        email: employee.email,
        password: employee.password,
      })
      .then((response) => {
        if (response.data) {
          alert("✅ Register Successfully Completed!");
          navigate("/login");
        }
      })
      .catch(() => alert("⚠️ Employee Already Exists!"));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Menu />

      {/* Centered Form */}
      <div className="flex-grow flex justify-center items-center">
        <form
          onSubmit={registerEmployee}
          className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
            Register Employee
          </h2>

          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={inputHandler}
              placeholder="Enter full name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={inputHandler}
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={employee.password}
              onChange={inputHandler}
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Register
          </button>

          {/* Already Registered */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already registered?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-600 font-semibold cursor-pointer hover:underline"
            >
              Login here
            </span>
          </p>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Register;
