import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const getPhotos = async (page) => {
  try {
        const response = await axios
            .get(`https://picsum.photos/v2/list?page=${page}&limit=8`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
function Photos() {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const handleLoadMore = useRef({});
  handleLoadMore.current = async () => {
    const images = await getPhotos(nextPage);
    const newPhotos = [...randomPhotos, ...images];
    setRandomPhotos(newPhotos);
    setNextPage(nextPage + 1);
  }
  useEffect(() => {
    handleLoadMore.current();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 ">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div
              className="p-5 bg-white rounded-lg shadow-md h-[300px]"
              key={`${item.download_url}${index}`}
            >
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          ))}
      </div>
      <div className="text-center mt-5">
        <button
          onClick={handleLoadMore.current}
          className="bg-purple-400 rounded-lg text-white inline-block px-8 py-4"
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default Photos;
