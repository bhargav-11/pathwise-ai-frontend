import React from "react";
import { Link } from "react-router-dom";
import { BiMessage } from "react-icons/bi";
import ChatHistoryItem from "./ChatHistoryItem";

const Sidebar = ({
  gethistory,
  allHistory,
  clearhistory,
  selectedItemIndex,
}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="logo">
          <div>Luna</div>
        </div>
        <div className="sidebutton">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
            >
              <circle cx="21" cy="21" r="21" fill="white" />
              <rect
                x="11.75"
                y="11.75"
                width="18.5"
                height="18.5"
                rx="2.25"
                stroke="#3B8CFA"
                stroke-width="1.5"
              />
              <rect
                x="19.6071"
                y="11.75"
                width="10.6429"
                height="18.5"
                rx="2.25"
                stroke="#3B8CFA"
                stroke-width="1.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <Link to="/" className="text-decoration-none">
        <div
          className="newchat"
          onClick={() => {
            clearhistory();
          }}
        >
          <div className="newchat-input">New Chat</div>
          <div className="addnewchat-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
            >
              <path
                d="M23 17.25V28.75M28.75 23H17.25M40.25 23C40.25 25.2653 39.8038 27.5084 38.9369 29.6013C38.07 31.6942 36.7994 33.5958 35.1976 35.1976C33.5958 36.7994 31.6942 38.07 29.6013 38.9369C27.5084 39.8038 25.2653 40.25 23 40.25C20.7347 40.25 18.4916 39.8038 16.3987 38.9369C14.3058 38.07 12.4042 36.7994 10.8024 35.1976C9.2006 33.5958 7.92997 31.6942 7.06308 29.6013C6.19618 27.5084 5.75 25.2653 5.75 23C5.75 18.425 7.56741 14.0374 10.8024 10.8024C14.0374 7.56741 18.425 5.75 23 5.75C27.575 5.75 31.9626 7.56741 35.1976 10.8024C38.4326 14.0374 40.25 18.425 40.25 23Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </Link>
      <div className="history">
        {allHistory?.length > 0 && (
          <div className="historyicon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 6V12H16.5M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                stroke="#A8CDFF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
            <span className="chat_history">Chat History</span>
          </div>
        )}
      </div>
      <div className="save-history">
        {allHistory.map((value, index) => (
          <Link to="/" className="text-decoration-none">
            <div
              className={`for-hover ${
                selectedItemIndex === value.id
                  ? "selected-type"
                  : "question-type2 "
              }`}
              onClick={() => gethistory(value.id)}
            >
              <div className="questionicon2">
                <BiMessage
                  className={
                    selectedItemIndex === value.id ? "selectedicon" : "i"
                  }
                />
                <span
                  className={
                    selectedItemIndex === value.id
                      ? "selected-link"
                      : "disablelink"
                  }
                >
                  <ChatHistoryItem child={value.message}></ChatHistoryItem>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
