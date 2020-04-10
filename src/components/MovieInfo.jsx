import React from 'react';

var MovieInfo = (props) => (
  <div className='movieInfo'>
    <div className='leftInfo'>
      <div>Released Date: {props.movie.release_date}</div>
      <div>Director: {props.movie.director}</div>
      <div>Average Vote: {props.movie.vote_average}</div>
    </div>
  </div>
);

export default MovieInfo;