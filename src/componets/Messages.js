import React, { useRef, useEffect, useState } from "react";
import Message from "./Message";
import Googlefolderid from "./Googlefolder";

function Messages({ messageList, loading, isnewchat }) {
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
        {isnewchat ? <Googlefolderid /> : <Message />}
        {/* <Message isnewchat={isnewchat}/> */}
      </div>
    </>
  );
}

export default Messages;
