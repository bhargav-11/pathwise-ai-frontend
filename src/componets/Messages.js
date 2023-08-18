import React, { useRef, useEffect, useState } from "react";
import Message from "./Message";

function Messages({ messageList, loading }) {
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
      <div className="messages" ref={messagesEndRef}>
        {messageList ? (
          messageList.map((value, index) => (
            <Message key={index} ask={value.user} response={value.bot} />
          ))
        ) : (
          <div className="no-messages"></div>
        )}
        {loading && <div class="loader" />}
      </div>
    </>
  );
}

export default Messages;
