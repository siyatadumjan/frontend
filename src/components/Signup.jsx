import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "..";
import linkup_logo from "../assets/linkup_logo.png";

const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();

  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/register`, user, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-pink-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-pink-500 p-6 text-center">
          <img
            src={linkup_logo}
            alt="LinkUp Logo"
            className="h-16 mx-auto mb-2"
          />
          <h1 className="text-4xl font-bold text-white">LinkUp</h1>
          <p className="text-pink-100 mt-1">Join our community</p>
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Create Account
          </h2>
          <form onSubmit={onSubmitHandler}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-gray-700">Full Name</span>
              </label>
              <input
                value={user.fullName}
                onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                className="input input-bordered bg-pink-50 focus:border-pink-400 focus:ring-pink-400"
                type="text"
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-gray-700">Username</span>
              </label>
              <input
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                className="input input-bordered bg-pink-50 focus:border-pink-400 focus:ring-pink-400"
                type="text"
                placeholder="Choose a username"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-gray-700">Password</span>
              </label>
              <input
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="input input-bordered bg-pink-50 focus:border-pink-400 focus:ring-pink-400"
                type="password"
                placeholder="Create a password"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-gray-700">
                  Confirm Password
                </span>
              </label>
              <input
                value={user.confirmPassword}
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
                className="input input-bordered bg-pink-50 focus:border-pink-400 focus:ring-pink-400"
                type="password"
                placeholder="Confirm your password"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-gray-700">Gender</span>
              </label>
              <div className="flex gap-6 mt-1">
                <label className="flex items-center cursor-pointer gap-2">
                  <input
                    type="radio"
                    className="radio radio-sm radio-pink-500"
                    checked={user.gender === "male"}
                    onChange={() => handleCheckbox("male")}
                  />
                  <span className="label-text">Male</span>
                </label>
                <label className="flex items-center cursor-pointer gap-2">
                  <input
                    type="radio"
                    className="radio radio-sm radio-pink-500"
                    checked={user.gender === "female"}
                    onChange={() => handleCheckbox("female")}
                  />
                  <span className="label-text">Female</span>
                </label>
              </div>
            </div>
            <div className="text-center mt-6 mb-4">
              <button
                type="submit"
                className="btn btn-block bg-pink-500 hover:bg-pink-600 text-white border-none"
              >
                Sign Up
              </button>
            </div>
            <div className="text-center text-gray-600">
              Already have an account?
              <Link
                to="/login"
                className="text-pink-500 hover:text-pink-700 ml-1 font-medium"
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup
