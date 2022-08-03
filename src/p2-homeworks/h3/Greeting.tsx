import React, { ChangeEvent, KeyboardEvent } from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
  name: string;
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void;
  addUser: () => void;
  error: string;
  totalUsers: number;
  btnDisabled: boolean;
  onEnter: (e: KeyboardEvent<HTMLInputElement>) => void;
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  { name, setNameCallback, addUser, error, totalUsers, btnDisabled, onEnter } // деструктуризация пропсов
) => {
  const inputClass = btnDisabled ? s.error : s.input;

  return (
    <div className={s.wrapper}>
      <p className={s.errorText}>{error}</p>
      <input
        value={name}
        onChange={setNameCallback}
        onKeyDown={onEnter}
        className={inputClass}
      />
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
