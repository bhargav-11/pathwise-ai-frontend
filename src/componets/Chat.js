import React, { useState } from "react";
import avtar from "../images/avtar.png";
import Messages from "./Messages";
import Input from "./Input";
import chat from "../images/chat.png";
import logo from "../images/logo.svg";

export const Chat = ({ chathistoryList, chat_history_id, setShouldReload }) => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState();
  const [chat_id, setChatId] = useState(chat_history_id);
  const [, setRefrshMsgList] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setMessageList(chathistoryList);
    setChatId(chat_history_id);
  }, [chathistoryList, chat_history_id]);

  const handleApiCall = () => {
    setLoading(true);
    setMessage("");
    setButtonClicked(false);
    const apiUrl = "http://localhost:5000/chat";
    let requestBody = {
      question: message,
    };
    if (chat_id == 0) {
      requestBody["start_new_chat"] = true;
    } else {
      requestBody["chat_id"] = chat_id;
    }
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading((pre) => !pre);
        setShouldReload((pre) => !pre);
        setChatId(data.chat_id);
        messageList[messageList?.length - 1] = {
          user: message,
          bot: data.response,
        };
        setMessageList(messageList);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="chat">
      <div className="chat-space">
        <div className="container">
          <div className="row justify-content-center mt-2 mb-2">
            <div className="col-md-2 ">
              <div className="box">
                <img src={chat} />
                <div
                  className="ps-3"
                  style={{ color: "#3B8CFA", fontSize: "20px" }}
                >
                  Luna-Chat
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="box1">
                <img src={avtar} />
                <p
                  className="ps-3"
                  style={{ color: "black", fontSize: "13px" }}
                >
                  I am your AI teacher assistant and I am here to help you. Ask
                  any questions related to your science curriculum!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chat-messages">
        <Messages messageList={messageList} loading={loading} />
      </div>
      <Input
        message={message}
        setMessage={setMessage}
        handleApiCall={handleApiCall}
        setMessageList={setMessageList}
        setRefrshMsgList={setRefrshMsgList}
        buttonClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
      />
      <hr className="mx-5" />
      <div className="footer">
        <div className="ms-5">Created by</div>
        <div className="ms-3">
          <img src={logo} />
        </div>
      </div>
    </div>
  );
};
