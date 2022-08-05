import React from "react";
import s from "./Error404.module.css";

function Error404() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>404</h1>
      <h2 className={s.subtitle}>Page not found!</h2>
    </div>
  );
}

export default Error404;
