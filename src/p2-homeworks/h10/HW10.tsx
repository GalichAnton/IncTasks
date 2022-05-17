import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./bll/store";
import { loadingAC } from "./bll/loadingReducer";
import styles from "./HW10.module.css";
function HW10() {
  // useSelector, useDispatch
  const dispatch = useDispatch();
  const loading = useAppSelector((state) => state.loading.loading);

  const setLoading = () => {
    // dispatch
    // setTimeout
    dispatch(loadingAC());
    setTimeout(() => dispatch(loadingAC()), 5000);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        homeworks 10
        {/* should work (должно работать)*/}
        {loading ? (
          <div className={styles.loading}>крутилка...</div>
        ) : (
          <div>
            <SuperButton onClick={setLoading}>set loading...</SuperButton>
          </div>
        )}
      </div>
      <hr />
      {/* для личного творчества, могу проверить*/}
      {/* <Alternative/>*/}
      <hr />
    </>
  );
}

export default HW10;
