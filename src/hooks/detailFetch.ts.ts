import { useState, useEffect } from "react";
import Details from "../types/Details/Details";

const useFetch = (url: string) => {
  const [data, setData] = useState<Details>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8d04e55021mshc75aa27c9f541a5p162222jsn84d23436fdc3",
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
