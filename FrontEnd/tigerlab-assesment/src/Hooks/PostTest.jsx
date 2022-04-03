import axios from "axios";
import { useMutation } from "react-query";
import { url } from "../Components/utils";

export const postTest = (route) => {
  return axios.post(url + route);
};

// Post Function
export const PerformTest = (onSuccess, onError) => {
  return useMutation(postTest);
};
