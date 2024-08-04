import React from "react";
const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex my-1">
      <img
        className="h-6 mr-2"
        src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        alt="user"
      />
      <span className="font-bold mr-2">{name}</span>
       <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
