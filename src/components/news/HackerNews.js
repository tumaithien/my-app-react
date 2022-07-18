import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
// import lodash from "lodash";
//https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFetchData = useRef({});
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );

  const isMounted = useRef(true);
  useEffect(() => {
    //
    isMounted.current = true
    return () => {
      // unmounted Component
      isMounted.current = false;
    };
  }, []);
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setTimeout(() => {
        if (isMounted.current) {
          setHits(response.data?.hits || []);
          setLoading(false);
        }
      }, 3000);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error happen ${error}`);
    }
  };
  // const handleChangeQuery = lodash.debounce((e) => {
  //   setQuery(e.target.value);
  // }, 500);
  React.useEffect(() => {
    handleFetchData.current();
  }, [url]);
  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-lg w-1/2">
      <div className="flex mb-3 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 block p-3 focus:border-blue-400 transition-all text-black w-full rounded-lg"
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search your keyword"
        />
        <button
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
          className="bg-blue-500 text-white font-semibold p-3 rounded-md flex-shrink-0"
        >
          Fetching
        </button>
      </div>
      {loading && (
        <div className="loading mx-auto my-10 w-8 h-8 border-blue-500 border-4 border-r-4 border-r-transparent rounded-full animate-spin"></div>
      )}
      {!loading && errorMessage && (
        <p className="text-red-400 my-5">{errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3
                key={`${item.title}${index}`}
                className="p-3 bg-gray-100 rounded-sm"
              >
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNews;
