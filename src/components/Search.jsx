import React from 'react';

var Search = (props) => (
  <span className="search-bar">
    <input
      type="text"
      placeholder="Search something..."
      search={props.value}
      onChange={props.handleSearch} />
      <button>Search!</button>
  </span>
);

export default Search;