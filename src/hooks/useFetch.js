import { useState, useEffect } from "react";

export default function useFetch(url, options) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setLoading(false);
        setResult(json);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    })();
  }, [options, url]);

  return { loading, result, error };
}
