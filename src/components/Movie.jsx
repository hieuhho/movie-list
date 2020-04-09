import React from 'react';

var Movie = (props) => (
  <div className="movie">
      <li>
        {props.movie.title}
      </li>
  </div>
);

export default Movie;