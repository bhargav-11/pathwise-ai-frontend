import React, { useState, useEffect } from "react";
import { Chat } from "../componets/Chat";
import Sidebar from "../componets/Sidebar";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [chathistoryList, setchathistoryList] = useState([]);
  const [chat_id, setchat_id] = useState(0);
  const [shouldReload, setShouldReload] = useState(false);
  const [allHistory, setAllHistory] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [isnewchat, setIsNewChat] = useState(true);
  const [historyFolderid,setHistoryFolderid] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    const apiurl =
      process.env.REACT_APP_API_URL + "/get_all_chat_history/" + user_id;
    axios
      .get(apiurl)
      .then((response) => {
        setAllHistory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    if (!localStorage.getItem("user_id")) {
      navigate("/");
    }
  }, [shouldReload]);

  const gethistory = (id,folderId) => {
    const apiurl = process.env.REACT_APP_API_URL + "/get_chats/" + id;
    axios
      .get(apiurl)
      .then((response) => {
        setchathistoryList(response.data);
        setchat_id(id);
        setSelectedItemIndex(id);
        setHistoryFolderid(folderId);
        console.log(historyFolderid);
        setIsNewChat(false)
      });
  };

  const clearhistory = () => {
    setchathistoryList([]);
    setchat_id(0);
    setSelectedItemIndex(0);
  };

  return (
    <>
      <div className="home">
        <Sidebar
          gethistory={gethistory}
          allHistory={allHistory}
          clearhistory={clearhistory}
          selectedItemIndex={selectedItemIndex}
          setIsNewChat={setIsNewChat}
          isnewchat={isnewchat}
        />
        <Chat
          chathistoryList={chathistoryList}
          chat_history_id={chat_id}
          setShouldReload={setShouldReload}
          isnewchat={isnewchat}
          setIsNewChat={setIsNewChat}
          historyFolderid={historyFolderid}
        />
      </div>
    </>
  );
};

export default Home;
