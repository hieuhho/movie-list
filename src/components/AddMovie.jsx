import React from 'react';

var AddMovie = (props) => (
  <div className="addMovie">
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        placeholder="Add Movie"
        onChange={props.onChange}
         />
      <button type="submit">Add a Movie</button>
    </form>
  </div>
);

export default AddMovie;