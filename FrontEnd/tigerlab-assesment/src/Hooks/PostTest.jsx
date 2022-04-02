import axios from "axios";
import { useMutation } from "react-query";

export const postTest = (route) => {
  return axios.post(`http://localhost:8001/api/v1/tests${route}`);
};

export const PerformTest = (onSuccess, onError) => {
  return useMutation(postTest);
};
