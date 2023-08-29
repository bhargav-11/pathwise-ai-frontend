import React from 'react'

const ChatHistoryItem = ({child}) => {
    const text = () => {
        if (child.length > 22) {
          return `${child.substr(0, 22)}...`;
        }
        return child;
      };
    
      return <>{text()}</>;
}

export default ChatHistoryItem