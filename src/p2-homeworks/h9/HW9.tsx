import React from "react";
import Clock from "./Clock";

function HW9() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <hr />
        homeworks 9{/* should work (должно работать)*/}
        <Clock />
        {/* для личного творчества, могу проверить*/}
        {/* <AlternativeClock/>*/}
      </div>
      <hr />
      <hr />
    </>
  );
}

export default HW9;
