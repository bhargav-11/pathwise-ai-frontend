import React, { useRef, useEffect, useState } from "react";
import Message from "./Message";

function Messages({ messageList, loading,isnewchat }) {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [JSON.stringify(messageList)]);
  return (
    <>
      <div className="messages">
       <Message isnewchat={isnewchat}/>
      </div>
    </>
  );
}

export default Messages;
