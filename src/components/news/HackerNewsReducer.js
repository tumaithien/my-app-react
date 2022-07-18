import React, { useReducer, useRef } from "react";
import axios from "axios";

const initalState = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
  url: "https://hn.algolia.com/api/v1/search?query=''",
};
const hackderNewsReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return {
        ...state,
        hits: action.payload,
      };
    }
    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }
    case "SET_ERROR": {
      return { ...state, errorMessage: action.payload };
    }
    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }
    case "SET_URL": {
      return { ...state, url: action.payload };
    }
    default:
      break;
  }
};
const HackerNewsReducer = () => {
  const [state, dispatch] = useReducer(hackderNewsReducer, initalState);
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const response = await axios.get(state.url);
      dispatch({
        type: "SET_DATA",
        payload: response.data?.hits || [],
      });
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      dispatch({
        type: "SET_ERROR",
        payload: `The error happen ${error}`,
      });
    }
  };
  React.useEffect(() => {
    handleFetchData.current();
  }, [state.url]);
  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-lg w-1/2">
      <div className="flex mb-3 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 block p-3 focus:border-blue-400 transition-all text-black w-full rounded-lg"
          defaultValue={state.query}
          onChange={(e) =>
            dispatch({
              type: "SET_QUERY",
              payload: e.target.value,
            })
          }
          placeholder="Search your keyword"
        />
        <button
          onClick={() =>
            dispatch({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            })
          }
          disabled={state.loading}
          className="bg-blue-500 text-white font-semibold p-3 rounded-md flex-shrink-0"
          style={{
            opacity: state.loading ? "0.25" : "1",
          }}
        >
          Fetching
        </button>
      </div>
      {state.loading && (
        <div className="loading mx-auto my-10 w-8 h-8 border-blue-500 border-4 border-r-4 border-r-transparent rounded-full animate-spin"></div>
      )}
      {!state.loading && state.errorMessage && (
        <p className="text-red-400 my-5">{state.errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => {
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

export default HackerNewsReducer;
