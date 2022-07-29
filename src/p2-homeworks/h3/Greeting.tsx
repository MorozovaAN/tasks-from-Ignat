import React, { ChangeEvent } from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
  name: string;
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void;
  addUser: () => void;
  error: string;
  totalUsers: number;
  btnDisabled: boolean;
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  { name, setNameCallback, addUser, error, totalUsers, btnDisabled } // деструктуризация пропсов
) => {
  const inputClass = btnDisabled ? s.error : s.input;

  return (
    <div className={s.wrapper}>
      <p>{error}</p>
      <input value={name} onChange={setNameCallback} className={inputClass} />
      <button disabled={btnDisabled} onClick={addUser} className={s.btnAdd}>
        add
      </button>
      <p>
        Всего пользователей: <span>{totalUsers}</span>
      </p>
    </div>
  );
};

export default Greeting;
