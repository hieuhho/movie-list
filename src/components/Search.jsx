import React from 'react';

var Search = (props) => (
  <span className="search-bar">
    <input
      type="text"
      placeholder="Search something..."
      onChange={props.handleSearch}/>
      <button value={props.search} onClick={props.handleSearchSubmit}>Search!</button>
  </span>
);

export default Search;