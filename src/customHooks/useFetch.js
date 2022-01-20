import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortConst = new AbortController();
    fetch(url, {signal: abortConst.signal})
      .then((res) => {
        //error coming back from server due to resource not existing
        if (!res.ok) {
          throw Error("could not fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        if(err.name === 'AbortError'){
          console.log('fetch is aborted');
        }
        else{
          // auto catches network/connection error
        setLoading(false);
        setError(err.message);
        }
      });
      return () => abortConst.abort();
  }, [url]);
  return { loading, data, error };
};

export default useFetch;
