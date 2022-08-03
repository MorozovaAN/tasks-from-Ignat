import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
  users: Array<UserType>;
  addUserCallback: (name: string) => void;
};

// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("Введите имя:");

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value.trim());
    if (/[aA-zZаА-яЯ]+/.test(e.currentTarget.value)) {
      setError("");
    } else {
      setError("Имя должно содержать буквенные символы");
    }
  };

  const addUser = () => {
    const currentName = name.trim();
    alert(`Hello ${currentName}!`);
    addUserCallback(currentName);
    setName("");
    setError("Введите имя:");
  };

  const totalUsers = users.length;
  const btnDisabled = /[aA-zZаА-яЯ]+/.test(name) ? false : true;

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && /[aA-zZаА-яЯ]+/.test(name)) addUser();
  };

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
      btnDisabled={btnDisabled}
      onEnter={onEnter}
    />
  );
};

export default GreetingContainer;
