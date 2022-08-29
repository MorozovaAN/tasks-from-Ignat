import React, { useState } from "react";
import { homeWorkReducer } from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import "../../index.css";
import s from "./HW8.module.css";

export type UserType = {
  _id: number;
  name: string;
  age: number;
};

const initialPeople: UserType[] = [
  { _id: 0, name: "Кот", age: 3 },
  { _id: 1, name: "Александр", age: 66 },
  { _id: 2, name: "Коля", age: 16 },
  { _id: 3, name: "Виктор", age: 44 },
  { _id: 4, name: "Дмитрий", age: 40 },
  { _id: 5, name: "Ирина", age: 55 },
];

function HW8() {
  const [people, setPeople] = useState<UserType[]>(initialPeople); // need to fix any

  // need to fix any
  const finalPeople = people.map((p: any) => (
    <div className={s.userContainer} key={p._id}>
      <div>{p.name}, </div>
      <div>возраст: {p.age}</div>
    </div>
  ));

  const sortUp = () =>
    setPeople(homeWorkReducer(initialPeople, { type: "sort", payload: "up" }));
  const sortDown = () => {
    setPeople(
      homeWorkReducer(initialPeople, { type: "sort", payload: "down" })
    );
  };
  const check18 = () => {
    setPeople(homeWorkReducer(initialPeople, { type: "check", payload: 18 }));
  };
  return (
    <div className={s.container}>
      <hr />
      <h4 className="HWTitle">homeworks 8</h4>
      {finalPeople}
      <div className={s.buttonsContainer}>
        <SuperButton onClick={sortUp}>sort up</SuperButton>
        <SuperButton onClick={sortDown}>sort down</SuperButton>
        <SuperButton onClick={check18}> check 18</SuperButton>
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativePeople/>*/}
      <hr />
    </div>
  );
}

export default HW8;
