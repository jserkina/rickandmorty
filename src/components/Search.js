import React from "react";

const Search = ({ setSearch, updatePageNumber }) => {
  let searchBtn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="my-8">
      <form className="mt-1 relative flex items-center">
        <input
          onChange={(e) => {
            updatePageNumber(1);
            setSearch(e.target.value);
          }}
          type="text"
          name="search"
          id="search"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 p-4 rounded-full"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
         <button onClick={searchBtn} className="inline-flex items-center border border-gray-200 rounded-full px-2 text-sm font-sans font-medium text-gray-400">
           Search
         </button>
       </div>
      </form>
    </div>
  )
}

export default Search;
