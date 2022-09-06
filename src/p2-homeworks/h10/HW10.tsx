import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import "../../index.css";
import { useSelector, useDispatch } from "react-redux";
import { loadingAC } from "./bll/loadingReducer";
import { AppStoreType } from "./bll/store";
import loader from "./loader.gif";

function HW10() {
  // useSelector, useDispatch
  const loading = useSelector<AppStoreType, boolean>(
    (state) => state.loading.isLoading
  );
  const dispatch = useDispatch();

  const setLoading = () => {
    dispatch(loadingAC());
    setTimeout(() => {
      dispatch(loadingAC());
    }, 2000);
    console.log("loading...");
  };

  return (
    <div>
      <hr />
      <h4 className="HWTitle">homeworks 10</h4>

      <div style={{ marginLeft: "20px" }}>
        {loading ? (
          <img src={loader} width={50} alt="loader" />
        ) : (
          <div>
            <SuperButton onClick={setLoading}>set loading</SuperButton>
          </div>
        )}
      </div>

      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr />
    </div>
  );
}

export default HW10;
