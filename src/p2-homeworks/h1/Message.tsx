import React from "react";
import style from "./Message.module.css";

type MessageType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function Message(props: MessageType) {
  return (
    <div className={style.wrapper}>
      <img className={style.avatar} src={props.avatar} alt="avatar" />
      <div className={style.container}>
        <svg
          className={style.tailIcon}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 3.57992V19.5H4.51426C8.76318 17.9841 12.172 15.058 14.728 11.8623C16.9415 9.0947 18.538 6.09728 19.5 3.57992Z"
            fill="#7FD363"
            stroke="#7FD363"
          />
        </svg>
        <div className={style.message}>
          <p className={style.name}>{props.name}</p>
          <p className={style.text}>{props.message}</p>
          <span className={style.time}>{props.time}</span>
        </div>
      </div>
    </div>
  );
}

export default Message;
