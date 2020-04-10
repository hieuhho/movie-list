import React from 'react';

var MovieInfo = (props) => (
  <div className='movieInfo'>
    <div className='leftInfo'>
      <div>Released Date: {props.movie.released}</div>
      <div>Director: {props.movie.director}</div>
    </div>
  </div>
);

export default MovieInfo;