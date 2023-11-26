import React, { useState } from "react";

const Search = (props) => {
  const [search,setSearch]=useState("")
  return (
    <div>
      <input
        type="text"
        className="search"
        placeholder="Search for..."
        defaultValue=""
        onChange={(e)=>setSearch(e.target.value)}
      />
      <button onClick={()=>props.handleSearch(search)} className="btn btn-secondary searchButton" type="button">
        Search
      </button>
    </div>
  );
};

export default Search;
