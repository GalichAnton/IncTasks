import React from "react";
import s from "./HW12.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../h10/bll/store";
import { changeThemeAC, ThemeType } from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
const themes = ["dark", "red", "some"];
function HW12() {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  // useDispatch, onChangeCallback
  const onChangeCallback = (theme: ThemeType) => {
    dispatch(changeThemeAC(theme));
  };
  return (
    <>
      <hr />
      <div
        className={s[theme]}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <span className={s[`${theme}-text`]}>homeworks 12</span>

        {/* should work (должно работать)*/}
        {/* SuperSelect or SuperRadio*/}
        <SuperSelect
          onChangeOption={onChangeCallback}
          value={theme}
          options={themes}
        />
      </div>
      <hr />
    </>
  );
}

export default HW12;
