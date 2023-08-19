import React from "react";
import { Link } from "react-router-dom";
import { BiMessage } from "react-icons/bi";

const Sidebar = ({
  gethistory,
  allHistory,
  clearhistory,
  newChat,
  isnewchat,
  selectedItemIndex,
}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="logo">
          <div>ChatBot</div>
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
          className={isnewchat ? "select-newchat" : "newchat"}
          onClick={() => {
            newChat();
          }}
        >
          <div className={isnewchat ? "select-newchat-input" : "newchat-input"}>
            New Chat
          </div>
          {isnewchat ? (
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
                  stroke="#3b8cfa"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          ) : (
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
          )}
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
        <div className="selected-type">
          <div className="questionicon">
            <BiMessage className="selectedicon" />
            <span className="selected-link ">Chat 1</span>
          </div>
          <div className="history-delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M0.5 18C0.5 8.33502 8.33502 0.5 18 0.5C27.665 0.5 35.5 8.33502 35.5 18C35.5 27.665 27.665 35.5 18 35.5C8.33502 35.5 0.5 27.665 0.5 18Z"
                fill="white"
                stroke="#3B8CFA"
              />
              <path
                d="M20.9737 14.9707C20.6892 14.9707 20.4585 15.2014 20.4585 15.4859V25.2236C20.4585 25.508 20.6892 25.7388 20.9737 25.7388C21.2583 25.7388 21.489 25.508 21.489 25.2236V15.4859C21.489 15.2014 21.2583 14.9707 20.9737 14.9707ZM14.8941 14.9707C14.6096 14.9707 14.3789 15.2014 14.3789 15.4859V25.2236C14.3789 25.508 14.6096 25.7388 14.8941 25.7388C15.1787 25.7388 15.4093 25.508 15.4093 25.2236V15.4859C15.4093 15.2014 15.1787 14.9707 14.8941 14.9707Z"
                fill="#3B8CFA"
              />
              <path
                d="M10.4633 13.5496V26.2436C10.4633 26.9939 10.7384 27.6984 11.219 28.204C11.4557 28.4548 11.741 28.6547 12.0575 28.7916C12.374 28.9285 12.7151 28.9994 13.0599 29H22.8081C23.1529 28.9994 23.494 28.9285 23.8106 28.7917C24.1271 28.6548 24.4124 28.4548 24.649 28.204C25.1296 27.6984 25.4047 26.9939 25.4047 26.2436V13.5496C26.3601 13.296 26.9792 12.373 26.8514 11.3927C26.7234 10.4126 25.8883 9.67942 24.8997 9.67922H22.2619V9.03519C22.2633 8.76709 22.2116 8.50136 22.1095 8.25344C22.0074 8.00551 21.8571 7.78033 21.6673 7.59097C21.4775 7.40163 21.2519 7.25189 21.0037 7.15045C20.7555 7.04901 20.4897 6.9979 20.2215 7.00007H15.6465C15.3784 6.99789 15.1125 7.049 14.8643 7.15044C14.6161 7.25188 14.3905 7.40162 14.2007 7.59097C14.0109 7.78033 13.8606 8.00551 13.7585 8.25344C13.6565 8.50136 13.6047 8.76709 13.6061 9.03519V9.67922H10.9683C9.97971 9.67942 9.14469 10.4126 9.01666 11.3927C8.88889 12.373 9.50793 13.296 10.4633 13.5496ZM22.8081 27.9696H13.06C12.179 27.9696 11.4937 27.2128 11.4937 26.2436V13.5949H24.3743V26.2436C24.3743 27.2129 23.689 27.9696 22.8081 27.9696ZM14.6366 9.03519C14.6349 8.90236 14.6599 8.77054 14.7102 8.64756C14.7604 8.52459 14.8348 8.41295 14.929 8.31929C15.0232 8.22557 15.1352 8.15172 15.2585 8.10212C15.3817 8.05251 15.5137 8.02816 15.6465 8.03051H20.2215C20.3544 8.02816 20.4863 8.05251 20.6096 8.10212C20.7328 8.15172 20.8449 8.22557 20.939 8.31929C21.0332 8.41295 21.1077 8.52458 21.1579 8.64756C21.2081 8.77054 21.2331 8.90236 21.2314 9.03519V9.67922H14.6366V9.03519ZM10.9683 10.7097H24.8998C25.412 10.7097 25.8272 11.1249 25.8272 11.6371C25.8272 12.1492 25.412 12.5645 24.8998 12.5645H10.9683C10.4561 12.5645 10.0409 12.1492 10.0409 11.6371C10.0409 11.1249 10.4561 10.7097 10.9683 10.7097Z"
                fill="#3B8CFA"
              />
              <path
                d="M17.9342 14.9707C17.6496 14.9707 17.4189 15.2014 17.4189 15.4859V25.2236C17.4189 25.508 17.6496 25.7388 17.9342 25.7388C18.2188 25.7388 18.4494 25.508 18.4494 25.2236V15.4859C18.4494 15.2014 18.2188 14.9707 17.9342 14.9707Z"
                fill="#3B8CFA"
              />
            </svg>
          </div>
        </div>
        <div className="question-type2">
          <div className="questionicon">
            <BiMessage className="i" />
            <span className="disablelink">Chat 1</span>
          </div>
          <div className="history-delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M0.5 18C0.5 8.33502 8.33502 0.5 18 0.5C27.665 0.5 35.5 8.33502 35.5 18C35.5 27.665 27.665 35.5 18 35.5C8.33502 35.5 0.5 27.665 0.5 18Z"
                fill="white"
                stroke="#3B8CFA"
              />
              <path
                d="M20.9737 14.9707C20.6892 14.9707 20.4585 15.2014 20.4585 15.4859V25.2236C20.4585 25.508 20.6892 25.7388 20.9737 25.7388C21.2583 25.7388 21.489 25.508 21.489 25.2236V15.4859C21.489 15.2014 21.2583 14.9707 20.9737 14.9707ZM14.8941 14.9707C14.6096 14.9707 14.3789 15.2014 14.3789 15.4859V25.2236C14.3789 25.508 14.6096 25.7388 14.8941 25.7388C15.1787 25.7388 15.4093 25.508 15.4093 25.2236V15.4859C15.4093 15.2014 15.1787 14.9707 14.8941 14.9707Z"
                fill="#3B8CFA"
              />
              <path
                d="M10.4633 13.5496V26.2436C10.4633 26.9939 10.7384 27.6984 11.219 28.204C11.4557 28.4548 11.741 28.6547 12.0575 28.7916C12.374 28.9285 12.7151 28.9994 13.0599 29H22.8081C23.1529 28.9994 23.494 28.9285 23.8106 28.7917C24.1271 28.6548 24.4124 28.4548 24.649 28.204C25.1296 27.6984 25.4047 26.9939 25.4047 26.2436V13.5496C26.3601 13.296 26.9792 12.373 26.8514 11.3927C26.7234 10.4126 25.8883 9.67942 24.8997 9.67922H22.2619V9.03519C22.2633 8.76709 22.2116 8.50136 22.1095 8.25344C22.0074 8.00551 21.8571 7.78033 21.6673 7.59097C21.4775 7.40163 21.2519 7.25189 21.0037 7.15045C20.7555 7.04901 20.4897 6.9979 20.2215 7.00007H15.6465C15.3784 6.99789 15.1125 7.049 14.8643 7.15044C14.6161 7.25188 14.3905 7.40162 14.2007 7.59097C14.0109 7.78033 13.8606 8.00551 13.7585 8.25344C13.6565 8.50136 13.6047 8.76709 13.6061 9.03519V9.67922H10.9683C9.97971 9.67942 9.14469 10.4126 9.01666 11.3927C8.88889 12.373 9.50793 13.296 10.4633 13.5496ZM22.8081 27.9696H13.06C12.179 27.9696 11.4937 27.2128 11.4937 26.2436V13.5949H24.3743V26.2436C24.3743 27.2129 23.689 27.9696 22.8081 27.9696ZM14.6366 9.03519C14.6349 8.90236 14.6599 8.77054 14.7102 8.64756C14.7604 8.52459 14.8348 8.41295 14.929 8.31929C15.0232 8.22557 15.1352 8.15172 15.2585 8.10212C15.3817 8.05251 15.5137 8.02816 15.6465 8.03051H20.2215C20.3544 8.02816 20.4863 8.05251 20.6096 8.10212C20.7328 8.15172 20.8449 8.22557 20.939 8.31929C21.0332 8.41295 21.1077 8.52458 21.1579 8.64756C21.2081 8.77054 21.2331 8.90236 21.2314 9.03519V9.67922H14.6366V9.03519ZM10.9683 10.7097H24.8998C25.412 10.7097 25.8272 11.1249 25.8272 11.6371C25.8272 12.1492 25.412 12.5645 24.8998 12.5645H10.9683C10.4561 12.5645 10.0409 12.1492 10.0409 11.6371C10.0409 11.1249 10.4561 10.7097 10.9683 10.7097Z"
                fill="#3B8CFA"
              />
              <path
                d="M17.9342 14.9707C17.6496 14.9707 17.4189 15.2014 17.4189 15.4859V25.2236C17.4189 25.508 17.6496 25.7388 17.9342 25.7388C18.2188 25.7388 18.4494 25.508 18.4494 25.2236V15.4859C18.4494 15.2014 18.2188 14.9707 17.9342 14.9707Z"
                fill="#3B8CFA"
              />
            </svg>
          </div>
        </div>
        <div className="question-type2">
          <div className="questionicon">
            <BiMessage className="i" />
            <span className="disablelink">Chat 1</span>
          </div>
          <div className="history-delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M0.5 18C0.5 8.33502 8.33502 0.5 18 0.5C27.665 0.5 35.5 8.33502 35.5 18C35.5 27.665 27.665 35.5 18 35.5C8.33502 35.5 0.5 27.665 0.5 18Z"
                fill="white"
                stroke="#3B8CFA"
              />
              <path
                d="M20.9737 14.9707C20.6892 14.9707 20.4585 15.2014 20.4585 15.4859V25.2236C20.4585 25.508 20.6892 25.7388 20.9737 25.7388C21.2583 25.7388 21.489 25.508 21.489 25.2236V15.4859C21.489 15.2014 21.2583 14.9707 20.9737 14.9707ZM14.8941 14.9707C14.6096 14.9707 14.3789 15.2014 14.3789 15.4859V25.2236C14.3789 25.508 14.6096 25.7388 14.8941 25.7388C15.1787 25.7388 15.4093 25.508 15.4093 25.2236V15.4859C15.4093 15.2014 15.1787 14.9707 14.8941 14.9707Z"
                fill="#3B8CFA"
              />
              <path
                d="M10.4633 13.5496V26.2436C10.4633 26.9939 10.7384 27.6984 11.219 28.204C11.4557 28.4548 11.741 28.6547 12.0575 28.7916C12.374 28.9285 12.7151 28.9994 13.0599 29H22.8081C23.1529 28.9994 23.494 28.9285 23.8106 28.7917C24.1271 28.6548 24.4124 28.4548 24.649 28.204C25.1296 27.6984 25.4047 26.9939 25.4047 26.2436V13.5496C26.3601 13.296 26.9792 12.373 26.8514 11.3927C26.7234 10.4126 25.8883 9.67942 24.8997 9.67922H22.2619V9.03519C22.2633 8.76709 22.2116 8.50136 22.1095 8.25344C22.0074 8.00551 21.8571 7.78033 21.6673 7.59097C21.4775 7.40163 21.2519 7.25189 21.0037 7.15045C20.7555 7.04901 20.4897 6.9979 20.2215 7.00007H15.6465C15.3784 6.99789 15.1125 7.049 14.8643 7.15044C14.6161 7.25188 14.3905 7.40162 14.2007 7.59097C14.0109 7.78033 13.8606 8.00551 13.7585 8.25344C13.6565 8.50136 13.6047 8.76709 13.6061 9.03519V9.67922H10.9683C9.97971 9.67942 9.14469 10.4126 9.01666 11.3927C8.88889 12.373 9.50793 13.296 10.4633 13.5496ZM22.8081 27.9696H13.06C12.179 27.9696 11.4937 27.2128 11.4937 26.2436V13.5949H24.3743V26.2436C24.3743 27.2129 23.689 27.9696 22.8081 27.9696ZM14.6366 9.03519C14.6349 8.90236 14.6599 8.77054 14.7102 8.64756C14.7604 8.52459 14.8348 8.41295 14.929 8.31929C15.0232 8.22557 15.1352 8.15172 15.2585 8.10212C15.3817 8.05251 15.5137 8.02816 15.6465 8.03051H20.2215C20.3544 8.02816 20.4863 8.05251 20.6096 8.10212C20.7328 8.15172 20.8449 8.22557 20.939 8.31929C21.0332 8.41295 21.1077 8.52458 21.1579 8.64756C21.2081 8.77054 21.2331 8.90236 21.2314 9.03519V9.67922H14.6366V9.03519ZM10.9683 10.7097H24.8998C25.412 10.7097 25.8272 11.1249 25.8272 11.6371C25.8272 12.1492 25.412 12.5645 24.8998 12.5645H10.9683C10.4561 12.5645 10.0409 12.1492 10.0409 11.6371C10.0409 11.1249 10.4561 10.7097 10.9683 10.7097Z"
                fill="#3B8CFA"
              />
              <path
                d="M17.9342 14.9707C17.6496 14.9707 17.4189 15.2014 17.4189 15.4859V25.2236C17.4189 25.508 17.6496 25.7388 17.9342 25.7388C18.2188 25.7388 18.4494 25.508 18.4494 25.2236V15.4859C18.4494 15.2014 18.2188 14.9707 17.9342 14.9707Z"
                fill="#3B8CFA"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
