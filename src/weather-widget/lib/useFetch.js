import { useState, useCallback } from "react";

export default function useFetch({
  apiUrl, initResponseData, requestInit,
}) {
  const [loading, setLoading] = useState(false);
  const [error, setErr] = useState();
  const [responseData, setResponseData] = useState(initResponseData);

  const handleFetch = useCallback(() => {
    setLoading(true);

    fetch(apiUrl, requestInit)
      .then(res => res.json())
      .then(res => setResponseData(res))
      .catch(error => {
        console.error(error);
        setErr(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [apiUrl, requestInit]);

  return {
    loading,
    error,
    handleFetch,
    responseData
  };
}