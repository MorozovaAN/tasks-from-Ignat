import React from "react";
import Message from "./Message";
import "../../index.css";

const messageData = {
  avatar:
    "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
  name: "Anna",
  message: "Hi, how are you?",
  time: "22:00",
};

function HW1() {
  return (
    <div>
      <hr />
      <h4 className="HWTitle">homeworks 1</h4>
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeMessage/>*/}
      <hr />
    </div>
  );
}

export default HW1;
