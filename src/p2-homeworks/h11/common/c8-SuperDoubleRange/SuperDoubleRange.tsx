import React, { useRef, useState } from "react";
import "./SuperDoubleRange.css";
import classnames from "classnames";
type SuperDoubleRangePropsType = {
  onChangeRangeMin: (value: number) => void;
  onChangeRangeMax: (value: number) => void;
  min: number;
  max: number;
};

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
  onChangeRangeMin,
  onChangeRangeMax,
  min,
  max,
}) => {
  return (
    <>
      <input
        type="range"
        min="0"
        max="100"
        value={min}
        onChange={(event) => {
          const value = Math.min(+event.target.value, max - 1);
          onChangeRangeMin(value);
          event.target.value = value.toString();
        }}
        className={classnames("thumb thumb--zindex-3", {
          "thumb--zindex-5": min > max - 100,
        })}
      />
      <input
        type="range"
        min="0"
        max="100"
        onChange={(event) => {
          const value = Math.max(+event.target.value, min + 1);
          onChangeRangeMax(value);
          event.target.value = value.toString();
        }}
        className="thumb thumb--zindex-4"
      />
      <div className="slider">
        <div className="slider__track" />
        <div className="slider__range" />
      </div>
    </>
  );
};

export default SuperDoubleRange;
