import React from 'react';

var AddMovie = (props) => (
  <div className="addMovie">
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={props.value}
        onChange={props.onChange}
      />

      <button type="submit">Add a Movie</button>
    </form>
  </div>
);

export default AddMovie;
{/* <input type="text" placeholder="Released Date"/>
<input type="text" placeholder="Director"/> */}