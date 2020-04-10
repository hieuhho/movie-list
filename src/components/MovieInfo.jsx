import React from 'react';

var MovieInfo = (props) => (
  <div className='movieInfo'>
    <div className='leftInfo'>
      <div>Released Date: {props.movie.release_date}</div>
      <div>Sypnosis: {props.movie.overview}</div>
      <div>Average Vote: {props.movie.vote}</div>
    </div>
  </div>
);

export default MovieInfo;