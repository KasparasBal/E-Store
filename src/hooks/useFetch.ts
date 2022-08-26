import { useState, useEffect } from "react";
import Types from "../utilities/types";

const useFetch = (url: string) => {
  const [data, setData] = useState<Types>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6ffb9c2e67msh6b6620b0f9935d2p1f842ejsn8eb88b02aa99",
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
        setLoading(false);
        setError(null);
        console.log(data);
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
