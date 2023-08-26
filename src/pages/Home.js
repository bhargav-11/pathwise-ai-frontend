import React, { useState, useEffect } from "react";
import { Chat } from "../componets/Chat";
import Sidebar from "../componets/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [chathistoryList, setchathistoryList] = useState([]);
  const [chat_id, setchat_id] = useState(0);
  const [shouldReload, setShouldReload] = useState(false);
  const [allHistory, setAllHistory] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [isnewchat, setIsNewChat] = useState(false);
  const navigate =useNavigate();
  useEffect(() => {
    // axios
    //   .get("http://localhost:5000/get_all_chat_history")
    //   .then((response) => {
    //     setAllHistory(response.data.chat_history);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
      // if (!localStorage.getItem("islogin")) {
      //   navigate("/");
      // }
  }, [shouldReload]);

  const gethistory = (id) => {
    axios
      .get("http://localhost:5000/get_chat_history/" + id)
      .then((response) => {
        setchathistoryList(response.data.chat_history);
        setchat_id(id);
        setSelectedItemIndex(id);
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
        />
      </div>
    </>
  );
};

export default Home;
