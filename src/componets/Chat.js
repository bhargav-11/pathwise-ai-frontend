import React, { useState } from "react";
import avtar from "../images/avtar.png";
import Messages from "./Messages";
import Input from "./Input";
import chat from "../images/chat.png";
import logo from "../images/logo.svg";
import { Box, Slider } from "@mui/material";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 50,
    label: "0.5",
  },
  {
    value: 100,
    label: "1",
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}
export const Chat = ({
  chathistoryList,
  chat_history_id,
  setShouldReload,
  isnewchat,
}) => {
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
            <div className="col-md-3 ">
              <div className="box">
                <img src={chat} />
                <div
                  className="ps-3"
                  style={{ color: "#3B8CFA", fontSize: "20px" }}
                >
                  Chat Bot
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
                  I am your AI assistant and I am here to help you to assist
                  with your drive folder content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container folder-content mt-2">
        <div className="row justify-content-center">
          <div className="col-md-4 folder-content-1">
            <div class=" row">
              <div class="row">
                <label for="inputPassword" class="col-sm-3 col-form-label">
                  folderId
                </label>
                <div class="col-sm-8 ms-3">
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword"
                    placeholder="23333455423"
                  />
                </div>
              </div>
            </div>
            <button>retrain</button>
          </div>
          <div className="col-md-4 folder-content-1 ms-3">
            <div className="me-4 mt-2">temperature</div>{" "}
            <Box sx={{ width: 180 }}>
              <Slider
                aria-label="Custom marks"
                defaultValue={80}
                getAriaValueText={valuetext}
                step={10}
                marks={marks}
                valueLabelDisplay="auto"
              />
            </Box>
          </div>
        </div>
      </div>
      <div className="chat-messages">
        <Messages
          messageList={messageList}
          loading={loading}
          isnewchat={isnewchat}
        />
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
    </div>
  );
};