import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchApi = (url) => {
    ///https://node5.onrender.com/user/user
  const [data, setdata] = useState({});
  const [isLoading, setisLoading] = useState(false);

  const getApiCall = async () => {
    setisLoading(true);
    const res = await axios.get(url);
    setdata(res.data);
    setisLoading(false);
  };

  useEffect(() => {
    getApiCall();
  }, []);

  return { data, isLoading };
};
