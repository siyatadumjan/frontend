import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import MessageContainer from "./MessageContainer";
import LandingPage from "./LandingPage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { authUser } = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authUser) {
      navigate("/landing");
    }
  }, [authUser, navigate]);

  return (
    <div className="p-1 bg-gradient-to-tr from-blue-200 to-pink-300">
      <div className="flex h-screen w-screen">
        <Sidebar />
        <div className="flex-1 h-full  bg-pink-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-lg rounded-lg overflow-hidden">
          <MessageContainer />
        </div>
      </div>
    </div>
  );
};


