import React from 'react';

var MovieInfo = (props) => (
  <div className='movieInfo'>
    <div className='leftInfo'>
      <div><b>Released Date: </b>{props.movie.release_date}</div>
      <div><b>Sypnosis: </b>{props.movie.overview}</div>
      <div><b>Average Vote: </b>{props.movie.vote}</div>
      <div><b>Ranking: </b>{props.movie.popularity}</div>
    </div>
  </div>
);

export default MovieInfo;