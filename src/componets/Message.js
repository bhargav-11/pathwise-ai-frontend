import React from "react";
import avtar from "../images/avtar.png";
import user from "../images/user.png";
import { RiFileCopyLine } from "react-icons/ri";

const Message = ({ ask, response }) => {
  return (
    <>
      <div className="message">
        <div className="message-info">
          <div className="other">
            <img src={avtar} />
            <div className="message-content">
              The Law of Attraction is a concept often associated with the idea
              that thoughts and beliefs can influence one's reality. It suggests
              that positive or negative thoughts can attract corresponding
              experiences into a person's life. According to this belief,
              focusing on positive thoughts and visualizing desired outcomes can
              manifest those outcomes into reality, while negative thoughts may
              attract unwanted circumstances. The Law of Attraction has gained
              popularity in self-help and New Age circles as a way to achieve
              personal goals and create a more positive life.
              <div className="copy float-end mt-4">
                <RiFileCopyLine />
              </div>
            </div>
          </div>
          <div className="user mt-3">
            <img src={user} />
            <div className="message-content">
              Present it on a bullet form 📝
            </div>
          </div>
        </div>
        
      </div>
      
    </>
  );
};

export default Message;
