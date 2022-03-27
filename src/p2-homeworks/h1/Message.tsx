import React from "react";
import { IHW1Props } from "./HW1";
import classes from "./Message.module.css";
function Message({ avatar, time, name, message }: IHW1Props) {
  return (
    <div className={classes.message}>
      <div className={classes.avatarContainer}>
        <img className={classes.avatar} src={avatar} alt={name} />
      </div>
      <div className={classes.messageContainer}>
        <div className={classes.textContainer}>
          <h2 className={classes.name}>{name}</h2>
          <p className={classes.text}>{message}</p>
        </div>
        <span className={classes.time}> {time}</span>
      </div>
    </div>
  );
}

export default Message;
