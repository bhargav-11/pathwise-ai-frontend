import React from "react";
import avtar from "../images/avtar.png";
import user from "../images/user.png";
import { RiFileCopyLine } from "react-icons/ri";

const Message = ({ ask, response }) => {
  const copyToclipboard = () =>{
    navigator.clipboard.writeText(JSON.stringify(response));
  }
  return (
    <>
      <div className="message">
        <div className="message-info">
        <div className="user mt-3">
            <img src={user} />
            <div className="message-content">
             {ask}
            </div>
          </div>
          <div className="other">
            <img src={avtar} />
            <div className="message-content">
             {response}
              <div className="copy float-end mt-4">
                <RiFileCopyLine onClick={copyToclipboard}/>
              </div>
            </div>
          </div>         
        </div>
        
      </div>
      
    </>
  );
};

export default Message;
