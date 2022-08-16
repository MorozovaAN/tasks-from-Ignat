import React, { useState } from "react";
import "../../index.css";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";

const arr = ["x", "y", "z"];

function HW7() {
  const [value, onChangeOption] = useState(arr[2]);

  return (
    <div>
      <hr />
      <h4 className="HWTitle">homeworks 7</h4>
      <div style={{ marginLeft: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <SuperSelect
            options={arr}
            value={value}
            onChangeOption={onChangeOption}
          />
        </div>
        <div>
          <SuperRadio
            name={"radio"}
            options={arr}
            value={value}
            onChangeOption={onChangeOption}
          />
        </div>
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperSelect/>*/}
      {/*<AlternativeSuperRadio/>*/}
      <hr />
    </div>
  );
}

export default HW7;
