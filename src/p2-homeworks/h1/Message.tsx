import React from 'react'
import style from "./Message.module.css"

type MessageType = {
    avatar: string;
    name: string,
    message: string,
    time: string,
}

function Message(props:MessageType) {
    return (
        <div className={style.message}>
            <img className={style.avatar} src={props.avatar} alt="avatar"/>
            <div className={style.container}>
                <p className={style.name}>{props.name}</p>
                <p className={style.text}>{props.message}</p>
                <span className={style.time}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
