import React from "react";
import { RiSendPlane2Fill } from "react-icons/ri";

const Input = ({
  message,
  setMessage,
  handleApiCall,
  setMessageList,
  setRefrshMsgList,
  setButtonClicked,
  setErrormessage,
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
              if(!event.target.value || event.target.value.trim()===""){
                setButtonClicked(false)
              }
              setErrormessage("");
              setButtonClicked(true);
            }}
            onKeyPress={(event) => {
              if (event.key == "Enter") {
              if(message.trim() !== ""){
                setMessageList((pre) => {
                  let array = pre;
                  array.push({ user: message, bot: "" });
                  return array;
                });
                setRefrshMsgList((pre) => !pre);
                handleApiCall();
              }else{
                setErrormessage("Input cannot be empty")
              }
            }
            }}
          />
          <button className="send-button" id="myBtn" onClick={handleApiCall}>
          {buttonClicked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M1.79664 1.00845C1.58021 0.945683 1.35084 0.942593 1.13279 0.999507C0.914747 1.05642 0.716143 1.17122 0.557996 1.33176C0.39985 1.49229 0.288043 1.6926 0.234408 1.91147C0.180772 2.13035 0.187303 2.35965 0.253309 2.57511L4.30664 15.7501H18.5C18.8315 15.7501 19.1494 15.8818 19.3839 16.1162C19.6183 16.3507 19.75 16.6686 19.75 17.0001C19.75 17.3316 19.6183 17.6496 19.3839 17.884C19.1494 18.1184 18.8315 18.2501 18.5 18.2501H4.30664L0.253309 31.4251C0.187303 31.6406 0.180772 31.8699 0.234408 32.0888C0.288043 32.3076 0.39985 32.5079 0.557996 32.6685C0.716143 32.829 0.914747 32.9438 1.13279 33.0007C1.35084 33.0576 1.58021 33.0545 1.79664 32.9918C12.8216 29.7856 23.2182 24.7206 32.5383 18.0151C32.6994 17.8994 32.8306 17.7469 32.9211 17.5704C33.0115 17.3939 33.0587 17.1985 33.0587 17.0001C33.0587 16.8018 33.0115 16.6063 32.9211 16.4298C32.8306 16.2533 32.6994 16.1009 32.5383 15.9851C23.2182 9.27953 12.8216 4.21453 1.79664 1.00845Z"
                  fill="#3B8CFA"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M1.79664 1.00845C1.58021 0.945683 1.35084 0.942593 1.13279 0.999507C0.914747 1.05642 0.716143 1.17122 0.557996 1.33176C0.39985 1.49229 0.288043 1.6926 0.234408 1.91147C0.180772 2.13035 0.187303 2.35965 0.253309 2.57511L4.30664 15.7501H18.5C18.8315 15.7501 19.1494 15.8818 19.3839 16.1162C19.6183 16.3507 19.75 16.6686 19.75 17.0001C19.75 17.3316 19.6183 17.6496 19.3839 17.884C19.1494 18.1184 18.8315 18.2501 18.5 18.2501H4.30664L0.253309 31.4251C0.187303 31.6406 0.180772 31.8699 0.234408 32.0888C0.288043 32.3076 0.39985 32.5079 0.557996 32.6685C0.716143 32.829 0.914747 32.9438 1.13279 33.0007C1.35084 33.0576 1.58021 33.0545 1.79664 32.9918C12.8216 29.7856 23.2182 24.7206 32.5383 18.0151C32.6994 17.8994 32.8306 17.7469 32.9211 17.5704C33.0115 17.3939 33.0587 17.1985 33.0587 17.0001C33.0587 16.8018 33.0115 16.6063 32.9211 16.4298C32.8306 16.2533 32.6994 16.1009 32.5383 15.9851C23.2182 9.27953 12.8216 4.21453 1.79664 1.00845Z"
                  fill="#a9a9a9"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
