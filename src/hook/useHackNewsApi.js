import { useEffect, useRef, useState } from "react";
import axios from "axios";
export default function useHackNewsApi(initialUrl, initialData) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFetchData = useRef({});
  const [url, setUrl] = useState(initialUrl);

  const isMounted = useRef(true);
  useEffect(() => {
    //
    isMounted.current = true;
    return () => {
      // unmounted Component
      isMounted.current = false;
    };
  }, []);
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      if (isMounted.current) {
        setData(response.data || []);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error happen ${error}`);
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [url]);

  return {
    data,
    loading,
    errorMessage,
    url,
    setUrl,
  };
}
