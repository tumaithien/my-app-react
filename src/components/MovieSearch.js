/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import useDebounce from "../hook/useDebounce";
import LoadingSkeleton from "./loading/LoadingSkeleton";
//ID: zenkinchen, pass: mai230319
//https://api.themoviedb.org/3/movie/550?api_key=e483b9304fcb8fba2b24ea288e2deae5
//https://api.themoviedb.org/3/search/movie?api_key=e483b9304fcb8fba2b24ea288e2deae5&query=''
const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const queryDebounce = useDebounce(query, 500);
  const [loading, setLoading] = useState(true);
  const inputRef = useRef();
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
    async function fetchData() {
      setLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=e483b9304fcb8fba2b24ea288e2deae5&query='${queryDebounce}'`
      );
      if (response.data.results) {
        setMovies(response.data.results);
        setLoading(false);
      }
    }
    fetchData();
  }, [queryDebounce]);
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto">
        <input
          type="text"
          className="w-full p-5 rounded-lg border border-purple-400 shadow-[0px_0px_0px_3px_rgba(125,_106,_255,_0.2)]"
          placeholder="Search movie"
          onChange={(e) => setQuery(e.target.value)}
          ref={inputRef}
        />
      </div>
      {loading && (
        <div className="grid grid-cols-3 gap-10 mt-10">
          <MovieItemLoading></MovieItemLoading>
          <MovieItemLoading></MovieItemLoading>
          <MovieItemLoading></MovieItemLoading>
        </div>
      )}
      {!loading && (
        <div className="grid grid-cols-3 gap-10 mt-10">
          {movies.length > 0 &&
            movies.map((item, index) => (
              <ItemMovie key={item.id} data={item}></ItemMovie>
            ))}
        </div>
      )}
    </div>
  );
};

const MovieItemLoading = () => {
  return (
    <div className="bg-white p-[10px] rounded-2xl shadow-sm flex flex-col">
      <div className="h-[297px]">
        <LoadingSkeleton
          width="100%"
          height="100%"
          radius="16px"
        ></LoadingSkeleton>
      </div>
      <div className="p-[30px] flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-4">
          <LoadingSkeleton height="20px"></LoadingSkeleton>
        </h3>
        <div className="text-gray-400 text-sm font-light mb-6 !leading-loose">
          <LoadingSkeleton height="10px"></LoadingSkeleton>
          <div className="h-2"></div>
          <LoadingSkeleton height="10px"></LoadingSkeleton>
          <div className="h-2"></div>
          <LoadingSkeleton height="10px"></LoadingSkeleton>
        </div>
        <div className="flex items-center mt-auto">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6671 4.02447C11.7719 3.70201 12.2281 3.70201 12.3329 4.02447L13.7175 8.28602C13.7644 8.43023 13.8988 8.52786 14.0504 8.52786H18.5313C18.8703 8.52786 19.0113 8.96173 18.737 9.16102L15.1119 11.7948C14.9892 11.8839 14.9379 12.0419 14.9847 12.1861L16.3694 16.4477C16.4742 16.7701 16.1051 17.0383 15.8308 16.839L12.2057 14.2052C12.0831 14.1161 11.9169 14.1161 11.7943 14.2052L8.16918 16.839C7.89488 17.0383 7.52581 16.7701 7.63059 16.4477L9.01525 12.1861C9.06211 12.0419 9.01078 11.8839 8.88811 11.7948L5.26301 9.16102C4.98871 8.96173 5.12968 8.52786 5.46874 8.52786H9.9496C10.1012 8.52786 10.2356 8.43023 10.2825 8.28602L11.6671 4.02447Z"
              stroke="#FFB86C"
              strokeWidth="1.5"
            />
            <path
              d="M9.03301 19.0001L9 19.9995"
              stroke="#FFB86C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M15.0296 19.1981L14.9966 20.1975"
              stroke="#FFB86C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12.0314 19.0991L11.9653 21.098"
              stroke="#FFB86C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          <span className="inline-block text-[#333] font-semibold text-sm">
            <LoadingSkeleton width="50px" height="10px"></LoadingSkeleton>
          </span>
        </div>
      </div>
    </div>
  );
};

const ItemMovie = ({ data }) => {
  return (
    <div className="bg-white p-[10px] rounded-2xl shadow-sm flex flex-col">
      <div className="h-[297px]">
        {data.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt="Item movie"
            className="w-full h-full rounded-lg object-cover"
          />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1653923299908-359762486cd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            alt="Item movie"
            className="w-full h-full rounded-lg object-cover"
          />
        )}
      </div>
      <div className="p-[30px] flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-4">{data.title}</h3>
        <p className="text-gray-400 text-sm font-light mb-6 !leading-loose">
          {data.overview ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
        </p>
        <div className="flex items-center mt-auto">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6671 4.02447C11.7719 3.70201 12.2281 3.70201 12.3329 4.02447L13.7175 8.28602C13.7644 8.43023 13.8988 8.52786 14.0504 8.52786H18.5313C18.8703 8.52786 19.0113 8.96173 18.737 9.16102L15.1119 11.7948C14.9892 11.8839 14.9379 12.0419 14.9847 12.1861L16.3694 16.4477C16.4742 16.7701 16.1051 17.0383 15.8308 16.839L12.2057 14.2052C12.0831 14.1161 11.9169 14.1161 11.7943 14.2052L8.16918 16.839C7.89488 17.0383 7.52581 16.7701 7.63059 16.4477L9.01525 12.1861C9.06211 12.0419 9.01078 11.8839 8.88811 11.7948L5.26301 9.16102C4.98871 8.96173 5.12968 8.52786 5.46874 8.52786H9.9496C10.1012 8.52786 10.2356 8.43023 10.2825 8.28602L11.6671 4.02447Z"
              stroke="#FFB86C"
              strokeWidth="1.5"
            />
            <path
              d="M9.03301 19.0001L9 19.9995"
              stroke="#FFB86C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M15.0296 19.1981L14.9966 20.1975"
              stroke="#FFB86C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12.0314 19.0991L11.9653 21.098"
              stroke="#FFB86C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          <span className="inline-block text-[#333] font-semibold text-sm">
            {data.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieSearch;
