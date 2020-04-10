import React from 'react';

var Search = (props) => (
  <span className="search-bar">
    <input
      type="text"
      placeholder="Search something..."
      search={props.value}
      onChange={props.onChange} />
      <button>Search!</button>
  </span>
);

export default Search;