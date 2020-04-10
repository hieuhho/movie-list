import React from 'react';

var AddMovie = (props) => (
  <div className="addMovie">
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Add Movie"
        onChange={props.handleChange}
         />
      <button type="submit">Add a Movie</button>
    </form>
  </div>
);

export default AddMovie;