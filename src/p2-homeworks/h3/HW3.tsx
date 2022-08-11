import React, { useState } from "react";
import GreetingContainer from "./GreetingContainer";
import { v1 } from "uuid";
import "../../index.css";

// types
export type UserType = {
  _id: string;
  name: string;
};

// уровень работы с глобальными данными
function HW3() {
  const [users, setUsers] = useState<Array<UserType>>([]); // need to fix any

  const addUserCallback = (name: string) => {
    setUsers([...users, { _id: v1(), name }]);
  };

  return (
    <div>
      <hr />
      <h4 className="HWTitle">homeworks 3</h4>
      <GreetingContainer users={users} addUserCallback={addUserCallback} />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeGreeting/>*/}
      <hr />
    </div>
  );
}

export default HW3;
