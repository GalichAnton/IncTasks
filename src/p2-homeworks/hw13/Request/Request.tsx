import React, { useState } from "react";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import { postReq } from "./RequestsAPI";

const Request = () => {
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const handleRequest = async () => {
    setIsLoading(true);
    const data = await postReq(success);
    setData(data);
    setIsLoading(false);
  };
  return (
    <div>
      <SuperButton onClick={handleRequest}>start</SuperButton>
      <SuperCheckbox
        checked={success}
        onChangeChecked={() => setSuccess((success) => !success)}
      />
      {isLoading ? (
        <span>LOADING</span>
      ) : data?.info ? (
        <div>{data.info}</div>
      ) : (
        <div>{data}</div>
      )}
    </div>
  );
};

export default Request;
