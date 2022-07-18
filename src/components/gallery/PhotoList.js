import React from "react";
import { useGallery } from "../../contexts/galleryContext";
import PropTypes from "prop-types";

const PhotoList = () => {
  const { photos, cartItem } = useGallery();
  console.log("cartItem", cartItem);
  return (
    <div className="py-10 px-5">
      <div className="grid grid-cols-4 gap-7">
        {photos.length > 0 &&
          photos.map((item, index) => {
            return <PhotoItem key={item.id} info={item}></PhotoItem>;
          })}
      </div>
    </div>
  );
};

function PhotoItem({ info }) {
  const { toggleFavorite, addToCart } = useGallery();
  const { url, title, isLike, id } = info;
  return (
    <div className="relative h-[400px] cursor-pointer group">
      <img src={url} alt={title} className="w-full h-full object-cover" />
      <span
        className="w-8 absolute right-5 top-5 z-10 cursor-pointer transition-all opacity-0 invisible group-hover:visible group-hover:opacity-100"
        onClick={() => toggleFavorite(id)}
      >
        <svg
          width="42"
          height="38"
          viewBox="0 0 42 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-full"
        >
          <path
            d="M0.166626 11.5C0.166108 8.47984 1.37993 5.58633 3.53499 3.47045C5.69005 1.35458 8.60534 0.19405 11.625 0.249979C15.2027 0.230979 18.6166 1.74826 21 4.41665C23.3833 1.74826 26.7972 0.230979 30.375 0.249979C33.3946 0.19405 36.3099 1.35458 38.4649 3.47045C40.62 5.58633 41.8338 8.47984 41.8333 11.5C41.8333 22.6583 28.5437 31.0833 21 37.75C13.4729 31.0271 0.166626 22.6666 0.166626 11.5Z"
            fill={`${isLike ? "#ff6bcb" : "#FFF"}`}
          />
        </svg>
      </span>
      <button
        onClick={() => addToCart(info)}
        className="transition-all opacity-0 invisible group-hover:visible group-hover:opacity-100 hover:bg-blue-500 hover:text-white bg-white text-black font-semibold text-sm py-3 px-6 rounded-lg absolute bottom-5 left-2/4 -translate-x-2/4"
      >
        Add to Cart
      </button>
    </div>
  );
}

PhotoItem.propTypes = {
  url: PropTypes.string,
  id: PropTypes.number,
  isLike: PropTypes.bool,
};

export default PhotoList;
