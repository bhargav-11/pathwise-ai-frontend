import React from "react";
import { RiSendPlane2Fill } from "react-icons/ri";

const Input = ({
  message,
  setMessage,
  handleApiCall,
  setMessageList,
  setRefrshMsgList,
  setButtonClicked,
  buttonClicked,
}) => {
  return (
    <div>
      <div className="input">
        <div className="message-input-container">
          <input
            className="message-input"
            id="myInput"
            type="text"
            placeholder="Send a message"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
              setButtonClicked(true);
            }}
            onKeyPress={(event) => {
              if (event.key == "Enter") {
                setMessageList((pre) => {
                  let array = pre;
                  array.push({ user: message, bot: "" });
                  return array;
                });
                setRefrshMsgList((pre) => !pre);
                handleApiCall();
              }
            }}
          />
          <button className="send-button" id="myBtn" onClick={handleApiCall}>
            <RiSendPlane2Fill
              className={buttonClicked ? "clicked-button" : "i"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
