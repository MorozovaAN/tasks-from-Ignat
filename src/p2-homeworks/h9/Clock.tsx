import React, { useState } from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./HW9.module.css";

function Clock() {
  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<Date>();
  const [show, setShow] = useState<boolean>(false);

  const stop = () => {
    clearInterval(timerId);
  };
  const start = () => {
    stop();
    const id: number = window.setInterval(() => {
      setDate(new Date());
    }, 1000);
    setTimerId(id);
  };

  const onMouseEnter = () => {
    setShow(true);
  };
  const onMouseLeave = () => {
    setShow(false);
  };

  const stringTime = date
    ? `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
      }:${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}`
    : "Press start to see the current time";

  const stringDate = date
    ? `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}.${
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1
      }.${date.getFullYear()}`
    : "";

  return (
    <div className={s.container}>
      <div
        className={s.timer}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {stringTime}
      </div>

      <div className={s.date}> {show && <>{stringDate}</>}</div>

      <div className={s.buttonsContainer}>
        <SuperButton onClick={start} className={s.buttonStart}>
          start
        </SuperButton>
        <SuperButton onClick={stop} red={true}>
          stop
        </SuperButton>
      </div>
    </div>
  );
}

export default Clock;
