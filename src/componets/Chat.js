import React, { useState } from "react";
import avtar from "../images/avtar.png";
import Messages from "./Messages";
import Input from "./Input";
import chat from "../images/chat.png";
import { Box, Slider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 0.5,
    label: "0.5",
  },
  {
    value: 1,
    label: "1",
  },
];

export const Chat = ({
  chathistoryList,
  chat_history_id,
  setShouldReload,
  isnewchat,
  setIsNewChat,
  historyFolderid,
  errormessage,
setErrormessage
}) => {
  const apiurl = process.env.REACT_APP_API_URL;
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState();
  const [chat_id, setChatId] = useState(chat_history_id);
  const [, setRefrshMsgList] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [folderid, setFolderid] = useState(historyFolderid);
  const [Temperature,setTemperature] = useState(0.5);
  const [retrainLoding, setRetrainLoding] = useState(false);
  const firstLetter = localStorage.getItem("firstLetter");
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("firstLetter");
    navigate("/");
  };
  const storagefolderId = (action) => {
    if(action==="retrain"){
      setIsNewChat(false);
      setRetrainLoding(true);
      let data = {
        folder_id: folderid,
      };
      try {
        axios.post(apiurl + "/retrain", data).then((response) => {
          setRetrainLoding(false);
        });
      } catch (error) {
        console.log(error);
      }
    }else{
      setIsNewChat(false);
    }
  }
  React.useEffect(() => {
    setMessageList(chathistoryList);
    setChatId(chat_history_id);
    setFolderid(historyFolderid);
  }, [chathistoryList, chat_history_id,historyFolderid]);

  const handleApiCall = () => {
    setLoading(true);
    setMessage("");
    setButtonClicked(false);
    let requestBody = {
      user_id: localStorage.getItem("user_id"),
      question: message,
      folder_id: folderid,
      temperature:Temperature,
    }
    if (chat_id == 0) {
      requestBody["start_new_chat"] = true;
    } else {
      requestBody["chat_id"] = chat_id;
    }
    fetch(apiurl + "/chat", {
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
        setMessageList([...messageList]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="chat" style={{ marginTop: "0.2%", marginLeft: "18%" }}>
      <div className="chat-space">
        <div className="container">
          <div className="row justify-content-center mt-2 mb-2">
            <div className="col-md-3" style={{ width: "28%" }}>
              <div className="box">
                <img src={chat} />
                <div
                  className="ps-3"
                  style={{ color: "#3B8CFA", fontSize: "20px" }}
                >
                  ChatBot
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
        <div>
          <div className="example-container">
            <a
              data-tooltip-id="my-tooltip-styles"
              data-tooltip-content="Log Out"
            >
              <div
                className="round"
                style={{ cursor: "pointer" }}
                onClick={handlelogout}
              >
                <h1 className="text-center">{firstLetter}</h1>
              </div>
            </a>
            <Tooltip id="my-tooltip-styles" className="example" />
          </div>
        </div>
      </div>
      <div className="container folder-content mt-1">
        <div className="row justify-content-center">
          <div className="col-md-4 folder-content-1">
            <div class=" row">
              <div class="row">
                <label
                  for="inputPassword"
                  class="col-sm-3 col-form-label"
                  style={{
                    marginTop: "2%",
                    color: "#3b8cfa",
                    marginLeft: "0.5rem",
                  }}
                >
                  folderId
                </label>
                <div class="col-sm-8 ms-3">
                  <input
                    style={{ marginTop: "3%" }}
                    type="text"
                    class="form-control chat-folderid"
                    id="inputPassword"
                    placeholder="Set FolderId"
                    value={folderid}
                  />
                </div>
              </div>
            </div>
            {retrainLoding ? (
              <div class="retrainLoder">
                <PulseLoader
                  color="#fff"
                  cssOverride={{}}
                  loading
                  margin={4}
                  size={15}
                  speedMultiplier={1}
                />
              </div>
            ) : (
              <button onClick={()=>storagefolderId("retrain")}>retrain</button>
            )}
          </div>
          <div className="col-md-4 folder-content-1 ms-3">
            <div
              className="me-4 "
              style={{ marginLeft: "0.6rem", marginTop: "2.6%" }}
            >
              temperature
            </div>{" "}
            <Box sx={{ width: 180 }} style={{ marginLeft: "10%" }}>
              <Slider
                aria-label="Custom marks"
                defaultValue={0.5}
                value={Temperature}
                min={0.0}
                max={1}
                step={0.1}
                marks={marks}
                valueLabelDisplay="auto"
                onChange={(event,newValue) => {
                  setTemperature(newValue);
                }}
              />
            </Box>
          </div>
        </div>
      </div>
      <div className="chat-messages">
        <Messages
          messageList={messageList}
          loading={loading}
          setLoading={setLoading}
          isnewchat={isnewchat}
          folderid={folderid}
          setFolderid={setFolderid}
          storagefolderId={storagefolderId}
          errorMessage={errormessage}
        />
      </div>
      {isnewchat ? (
        <></>
      ) : (
        <>
          <Input
            message={message}
            setMessage={setMessage}
            handleApiCall={handleApiCall}
            setMessageList={setMessageList}
            setRefrshMsgList={setRefrshMsgList}
            buttonClicked={buttonClicked}
            setButtonClicked={setButtonClicked}
            setErrormessage={setErrormessage}
          />
        </>
      )}
    </div>
  );
};
