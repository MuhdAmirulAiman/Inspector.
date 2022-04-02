import axios from "axios";
import { useQuery } from "react-query";
import { url } from "../Components/utils";

const fetchTest = () => {
  return axios.get(url);
};

export const GetTestList = (onSuccess, onError) => {
  return useQuery("test", fetchTest, {
    staleTime: 50000, //check for update every 5 minutes
    onError: onError,
    onSuccess: onSuccess,
  });
};
