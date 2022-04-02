import axios from "axios";
import { useQuery } from "react-query";

const fetchTest = () => {
  return axios.get("http://localhost:8001/api/v1/tests");
};

export const GetTestList = (onSuccess, onError) => {
  return useQuery("test", fetchTest, {
    staleTime: 50000, //check for update every 5 minutes
    onError: onError,
    onSuccess: onSuccess,
  });
};
