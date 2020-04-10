import React from 'react';

var MovieInfo = (props) => (
  <div className='movieInfo'>
    <div className='leftInfo'>
      <div>Released Date: {props.movie.released}</div>
      <div>Director: {props.movie.director}</div>
    </div>
    <div className='rightInfo'>
      <div><img className='thumbnail' src={props.movie.thumbnail.url}></img></div>
    </div>
  </div>
);

export default MovieInfo;