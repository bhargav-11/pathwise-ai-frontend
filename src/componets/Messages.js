import React, { useRef, useEffect, useState } from "react";
import Message from "./Message";
import Googlefolderid from "./Googlefolder";
import { BiSolidCommentError } from "react-icons/bi";
import avtar from "../images/avtar.png";
import PulseLoader from "react-spinners/PulseLoader";

function Messages({
  messageList,
  loading,
  setLoading,
  isnewchat,
  folderid,
  setFolderid,
  storagefolderId,
  errorMessage
}) {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };
  useEffect(() => {
    scrollToBottom();
    if (errorMessage) {
      setLoading(false);
    }
  }, [JSON.stringify(messageList),errorMessage]);
  return (
    <>
      <div className="messages" ref={messagesEndRef}>
        {isnewchat ? (
          <Googlefolderid
            folderid={folderid}
            setFolderid={setFolderid}
            storagefolderId={storagefolderId}
          />
        ) : (
          <>
            {messageList ? (
          messageList.map((value, index) => (
            <Message key={index} ask={value.user} response={value.bot} />
          ))
        ) : (
          <div className="no-messages"></div>
        )}
         {errorMessage && (
          <div className="mt-4">
            <img src={avtar} width="7%" height="7%" />
            <span className="error-message" style={{ marginLeft: "0.7rem" }}>
              <BiSolidCommentError className="me-2" />
              {errorMessage}
            </span>
          </div>
        )}
        {loading && (
          <div class="loader">
            <PulseLoader
              color="#3b8cfa"
              cssOverride={{}}
              loading
              margin={4}
              size={15}
              speedMultiplier={1}
            />
          </div>
        )}
          </>
        )}
      </div>
    </>
  );
}

export default Messages;
