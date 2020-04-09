import React from 'react';

var Search = (props) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search something..."
      search={props.value}
      onChange={props.onChange} />
      <button>Search!</button>
  </div>
);

export default Search;