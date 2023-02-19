import React from "react";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const ChatFooter = ({ socket, setMessages, messages, selectedChat }) => {
  const [message, setMessage] = useState("");
  const handleSend = (e) => {
    e.preventDefault();
    console.log(message);
    console.log();
    if (!(message === "")) {
      socket.emit("private-message", {
        content: message,
        to: selectedChat,
      });
      console.log("sadfsa");
      // setMessages([...messages, message]);
    }
    setMessage("");
  };

  if (selectedChat) {
    return (
      <div>
        {" "}
        <form action="" className="flex" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Write a message"
            className="w-full bg-slatePlus p-[10px]"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
          />
          <button className="btn chat-btn">Send</button>
        </form>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ChatFooter;
