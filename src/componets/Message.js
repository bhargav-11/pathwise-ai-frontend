import React from "react";
import avtar from "../images/avtar.png";
import user from "../images/user.png";
import { RiFileCopyLine } from "react-icons/ri";
import Swal from "sweetalert2";

const Message = ({ ask, response }) => {
  const copyToclipboard = () =>{
    navigator.clipboard.writeText(JSON.stringify(response));
    Swal.fire({
      title: "Response copied to clipboard",
      icon: "success",
      toast: true,
      timer: 2000,
      position: "top-right",
      timerProgressBar: true,
      showConfirmButton: false,
    });
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
          {response?.length > 0 && (
          <div className="other">
            <img src={avtar} />
            <div className="message-content">
             {response}
              <div className="copy float-end mt-4">
                <RiFileCopyLine onClick={copyToclipboard}/>
              </div>
            </div>
          </div>
          )}         
        </div>
        
      </div>
      
    </>
  );
};

export default Message;
