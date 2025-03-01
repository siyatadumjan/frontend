import React, { useEffect } from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const MessageContainer = () => {
  const { selectedUser, authUser, onlineUsers } = useSelector(
    (store) => store.user
  );
  const dispatch = useDispatch();

  const isOnline = onlineUsers?.includes(selectedUser?._id);

  return (
    <>
      {selectedUser !== null ? (
        <div className="md:min-w-[550px] flex flex-col h-full">
          <div className="flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2 hover:bg-zinc-700 transition-colors">
            <div className={`avatar ${isOnline ? "online pulse" : ""}`}>
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={selectedUser?.profilePhoto} alt="user-profile" />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex justify-between gap-2">
                <p className="font-bold">{selectedUser?.fullName}</p>
                <span className="badge badge-primary">
                  {isOnline ? "Active now" : "Offline"}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <Messages />
          </div>
          <div className="sticky bottom-0 animate-fadeIn">
            <SendInput />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="animate-bounce text-6xl mb-4">👋</p>
          <h1 className="text-4xl text-black font-bold mb-3">
            Welcome back,{" "}
            <span className="text-primary">{authUser?.fullName}</span>!
          </h1>
          <h1 className="text-2xl text-gray-800 mb-6">
            Select a chat to start messaging
          </h1>
          <div className="tooltip" data-tip="Choose a contact from the sidebar">
            <button className="btn btn-primary pulse">Start chatting</button>
          </div>
        </div>
      )}
    </>
  );
};


