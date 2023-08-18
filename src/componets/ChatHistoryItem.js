import React from "react";

const ChatHistoryItem = ({ child }) => {
  const text = () => {
    if (child.length > 23) {
      return `${child.substr(0, 23)}...`;
    }
    return child;
  };

  return <>{text()}</>;
};

export default ChatHistoryItem;
