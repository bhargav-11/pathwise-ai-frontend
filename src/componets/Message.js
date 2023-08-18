import React from "react";
import avtar from "../images/avtar.png";
import user from "../images/user.png";

const Message = ({ ask, response }) => {
  const messageWithBreaks = response.split("\n\n").map((paragraph, index) => (
    <React.Fragment key={index}>
      {paragraph}
      <br />
      <br />
    </React.Fragment>
  ));

  return (
    <>
      <div className="message">
        <div className="message-info">
          <div className="user">
            <img src={user} />
            <div className="message-content">{ask}</div>
          </div>
          {response?.length > 0 && (
            <div className="other">
              <img src={avtar} />
              <div className="message-content">{messageWithBreaks}</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Message;
