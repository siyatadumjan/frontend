import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";
import { BASE_URL } from "..";
import linkup_logo from "../assets/linkup_logo.png";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/login`, user, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      navigate("/");
      console.log(res);
      dispatch(setAuthUser(res.data));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      username: "",
      password: "",
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
          <p className="text-pink-100 mt-1">Connect with everyone</p>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Welcome Back
          </h2>

          <form onSubmit={onSubmitHandler}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-gray-700">Username</span>
              </label>
              <input
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                className="input input-bordered bg-pink-50 focus:border-pink-400 focus:ring-pink-400"
                type="text"
                placeholder="Enter your username"
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
                placeholder="Enter your password"
              />
            </div>

            <div className="text-center mt-6 mb-4">
              <button
                type="submit"
                className="btn btn-block bg-pink-500 hover:bg-pink-600 text-white border-none"
              >
                Sign In
              </button>
            </div>

            <div className="text-center text-gray-600">
              Don't have an account?
              <Link
                to="/signup"
                className="text-pink-500 hover:text-pink-700 ml-1 font-medium"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
