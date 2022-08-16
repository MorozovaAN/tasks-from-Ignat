import React, { useState } from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { restoreState, saveState } from "./localStorage/localStorage";
import s from "./HW6.module.css";
import "../../index.css";

function HW6() {
  const [value, setValue] = useState<string>("");

  const save = () => {
    saveState<string>("editable-span-value", value);
  };
  const restore = () => {
    setValue(restoreState("editable-span-value", ""));
  };

  return (
    <div>
      <hr />
      <h4 className="HWTitle">homeworks 6</h4>

      <div className={s.container}>
        <SuperEditableSpan
          value={value}
          onChangeText={setValue}
          spanProps={{ children: value ? undefined : "enter text..." }}
        />

        <div className={s.buttonsContainer}>
          <SuperButton onClick={save}>save</SuperButton>
          <SuperButton onClick={restore}>restore</SuperButton>
        </div>
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperEditableSpan/>*/}
      <hr />
    </div>
  );
}

export default HW6;
