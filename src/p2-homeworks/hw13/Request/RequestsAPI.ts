import axios from "axios";

export const BASE_URL = "https://neko-cafe-back.herokuapp.com/auth/test";
export const postReq = async (success: boolean) => {
  try {
    const res = await axios.post(BASE_URL, { success });
    return res.data;
  } catch (error: any) {
    return error.response ? error.response.data.errorText : error.message;
  }
};
