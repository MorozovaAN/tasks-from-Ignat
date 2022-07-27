import React, { useState } from "react";
import Affairs from "./Affairs";

// types
export type AffairPriorityType = Array<AffairType>;
export type AffairType = { _id: number; name: string; priority: string };
export type FilterType = "all" | "high" | "middle" | "low";

// constants
const defaultAffairs: AffairPriorityType = [
  { _id: 1, name: "React", priority: "high" },
  { _id: 2, name: "anime", priority: "low" },
  { _id: 3, name: "games", priority: "low" },
  { _id: 4, name: "work", priority: "high" },
  { _id: 5, name: "html & css", priority: "middle" },
];

// pure helper functions
export const filterAffairs = (
  affairs: AffairPriorityType,
  filter: FilterType
) => {
  if (filter === "high") {
    affairs = affairs.filter((a) => a.priority === "high");
  }
  if (filter === "middle") {
    affairs = affairs.filter((a) => a.priority === "middle");
  }
  if (filter === "low") {
    affairs = affairs.filter((a) => a.priority === "low");
  }
  return affairs;
};

export const deleteAffair = (affairs: AffairPriorityType, _id: number): any => {
  return affairs.filter((a) => a._id !== _id);
};

function HW2() {
  const [affairs, setAffairs] = useState<AffairPriorityType>(defaultAffairs);
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredAffairs = filterAffairs(affairs, filter);
  const deleteAffairCallback = (_id: number) => {
    setAffairs(deleteAffair(affairs, _id));
    console.log(affairs, _id);
  };

  return (
    <div>
      <hr />
      homeworks 2{/*should work (должно работать)*/}
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
      />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeAffairs/>*/}
      <hr />
    </div>
  );
}

export default HW2;
