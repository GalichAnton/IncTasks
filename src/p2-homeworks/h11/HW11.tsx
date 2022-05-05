import React, { useState } from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(1000);

  const onChangeRange1 = (num: number) => {
    setValue1(num);
  };
  const onChangeRange2 = (num: number) => {
    setValue2(num);
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
        <hr />
        homeworks 11
        {/* should work (должно работать)*/}
        <div>
          <span>{value1}</span>
          <SuperRange
            min={value1}
            onChangeRange={onChangeRange1}
            // сделать так чтоб value1 изменялось
          />
        </div>
        <div style={{ display: "flex" }}>
          <span>{value1}</span>
          <SuperDoubleRange
            min={value1}
            max={value2}
            onChangeRangeMin={onChangeRange1}
            onChangeRangeMax={onChangeRange2}
          />
          <span>{value2}</span>
        </div>
      </div>
      <hr />
      {/* для личного творчества, могу проверить*/}
      {/* <AlternativeSuperRange/>*/}
      {/* <AlternativeSuperDoubleRange/>*/}
      <hr />
    </>
  );
}

export default HW11;
