import axios from "axios";
import { useEffect, useState } from "react";

export default function useA({ url, method = "GET", headers = {} }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { error, setError } = useState(null);

  useEffect(
    function () {
      (async function () {
        try {
          if (!url) {
            throw new Error("missing url parameter");
          } //guard clause
          setLoading(true);
          const response = await axios.get({ url, method, headers });
          setData(response.data);
        } catch (error) {
          //her kunne være importeret en logging service fx sentry.io
          console.error(error);
          setError("Noget gik helt galt");
        } finally {
          setLoading(false);
        }
      })();
    },

    [url]
  );

  return { data, loading, error };
}
