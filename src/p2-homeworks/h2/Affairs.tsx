import React from "react";
import styles from "./Affairs.module.css";
import Affair from "./Affair";
import { AffairPriorityType, AffairType, FilterType } from "./HW2";

type AffairsPropsType = {
  data: AffairPriorityType;
  setFilter: (filter: FilterType) => void;
  deleteAffairCallback: (id: number) => void;
};

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((affair: AffairType) => (
    <Affair // should work
      key={affair._id}
      affair={affair}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ));

  const setAll = () => {
    props.setFilter("all");
  };
  const setHigh = () => {
    props.setFilter("high");
  };
  const setMiddle = () => {
    props.setFilter("middle");
  };
  const setLow = () => {
    props.setFilter("low");
  };

  return (
    <div className={styles.affairs}>
      <h2 className={styles.affairsTitle}>Affairs</h2>
      {mappedAffairs}
      <h3 className={styles.priorityTitle}>Sort by priority:</h3>
      <button className={styles.btnPriority} onClick={setAll}>
        All
      </button>
      <button className={styles.btnPriority} onClick={setHigh}>
        High
      </button>
      <button className={styles.btnPriority} onClick={setMiddle}>
        Middle
      </button>
      <button className={styles.btnPriority} onClick={setLow}>
        Low
      </button>
    </div>
  );
}

export default Affairs;
