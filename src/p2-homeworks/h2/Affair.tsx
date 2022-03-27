import React from "react";
import { AffairType } from "./HW2";
import classes from "./Affairs.module.css";
type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType; // need to fix any
  deleteAffairCallback: (_id: number) => void; // need to fix any
};

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id);
  }; // need to fix

  return (
    <div className={classes.affair}>
      <span className={classes.affair__title}>{props.affair.name}</span>
      <button className={classes.affair__btn} onClick={deleteCallback}>
        X
      </button>
    </div>
  );
}

export default Affair;
