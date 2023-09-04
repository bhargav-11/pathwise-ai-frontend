import React, { useState, useEffect } from "react";
import { Chat } from "../componets/Chat";
import Sidebar from "../componets/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Home = () => {
  const apiurl = process.env.REACT_APP_API_URL;
  const [chathistoryList, setchathistoryList] = useState([]);
  const [chat_id, setchat_id] = useState(0);
  const [shouldReload, setShouldReload] = useState(false);
  const [allHistory, setAllHistory] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [isnewchat, setIsNewChat] = useState(false);
  const [historyFolderid, setHistoryFolderid] = useState("");
  const [errormessage, setErrormessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    axios
      .get(apiurl + "/get_all_chat_history/" + user_id)
      .then((response) => {
        if (response.status >= 200 && response.status <= 205) {
          setAllHistory(response.data);
        }
      })
      .catch((error) => {
        Swal.fire({
          title: error.response.data.error,
          icon: "error",
          toast: true,
          timer: 2000,
          position: "top-right",
          timerProgressBar: true,
          showConfirmButton: false,
        });
      });
    if (!localStorage.getItem("user_id")) {
      navigate("/");
    }
  }, [shouldReload]);

  const gethistory = (id, folderId) => {
    axios
      .get(apiurl + "/get_chats/" + id)
      .then((response) => {
        if (response.status >= 200 && response.status <= 205) {
          setchathistoryList(response.data);
          setchat_id(id);
          setSelectedItemIndex(id);
          setHistoryFolderid(folderId);
          setIsNewChat(false);
        }
      })
      .catch((error) => {
        Swal.fire({
          title: error.response.data.error,
          icon: "error",
          toast: true,
          timer: 2000,
          position: "top-right",
          timerProgressBar: true,
          showConfirmButton: false,
        });
      });
  };
  const deleteHistory = (id) => {
    try {
      axios
        .delete(apiurl + "/delete_chat_history/" + id)
        .then((response) => {
          if (response.status >= 200 && response.status <= 205) {
            setShouldReload((pre) => !pre);
            setchathistoryList([]);
            setIsNewChat(false);
            setHistoryFolderid("");

            Swal.fire({
              title: response.data.message,
              icon: "success",
              toast: true,
              timer: 2000,
              position: "top-right",
              timerProgressBar: true,
              showConfirmButton: false,
            });
          }
        })
        .catch((error) => {
          Swal.fire({
            title: error.response.data.error,
            icon: "error",
            toast: true,
            timer: 2000,
            position: "top-right",
            timerProgressBar: true,
            showConfirmButton: false,
          });
        });
    } catch (error) {
      Swal.fire({
        title: error.response.data.error,
        icon: "error",
        toast: true,
        timer: 2000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  const clearhistory = () => {
    setIsNewChat(!isnewchat);
    setchathistoryList([]);
    setchat_id(0);
    setSelectedItemIndex(0);
    setHistoryFolderid("");
    setErrormessage("");
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
          deleteHistory={deleteHistory}
        />
        <Chat
          chathistoryList={chathistoryList}
          chat_history_id={chat_id}
          setShouldReload={setShouldReload}
          isnewchat={isnewchat}
          setIsNewChat={setIsNewChat}
          historyFolderid={historyFolderid}
          errormessage={errormessage}
          setErrormessage={setErrormessage}
        />
      </div>
    </>
  );
};

export default Home;
