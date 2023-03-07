import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (method, url) => {
  const [data, setData] = useState();
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const response = await axios.get({ method: method, url: url });

        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);
  return { data, error, isLoading };
};

export default useAxios;
