import { useState, useEffect } from "react";
import Query from "../types/Query/Query";

const useFetch = (url: string) => {
  const [data, setData] = useState<Query>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "7a110d67a8msha01440dfac91c40p193a7cjsnd7e4757297fc",
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw Error("couldn't fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
