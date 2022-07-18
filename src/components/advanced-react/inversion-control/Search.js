import React from "react";
import { useDropdown } from "./dropdown-context";

const Search = (props) => {
  const { onChange } = useDropdown();
  return (
    <div className="p-2">
      <input
        type="text"
        className="p-3 border border-gray-300 rounded w-full"
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
