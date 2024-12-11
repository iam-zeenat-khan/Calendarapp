import React, { memo } from "react";

const SearchInput = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search Events.."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full sm:w-2/3 lg:w-1/2 px-4 py-2 sm:py-4 mb-4 text-lg sm:text-2xl text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-lg sm:placeholder:text-2xl shadow-sm transition-all duration-200"
      />
    </>
  );
};

export default memo(SearchInput);
