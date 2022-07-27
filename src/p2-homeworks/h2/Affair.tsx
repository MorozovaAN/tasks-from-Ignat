import React from "react";
import { AffairType } from "./HW2";
import styles from "./Affairs.module.css";

type AffairPropsType = {
  affair: AffairType;
  deleteAffairCallback: (id: number) => void;
};

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id);
  };

  return (
    <div className={styles.affair}>
      <span className={styles.name}>{props.affair.name}</span>
      <span>[{props.affair.priority}]</span>
      <button className={styles.btnDelete} onClick={deleteCallback}>
        X
      </button>
    </div>
  );
}

export default Affair;
