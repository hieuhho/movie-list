import React from 'react';
import Movie from './Movie.jsx';
import moviesData from './moviesData.js';

var MoviesList = (props) => (
  <div className="moviesList">
    <ul>
      {props.moviesData.movies.filter((movie) =>
            {
              return movie.title.toLowerCase().indexOf(props.moviesData.search.toLowerCase()) !== -1;
            }).map((movie) => {
        return <Movie movie={movie} key={movie.id} />
      })}
    </ul>
  </div>
);

export default MoviesList;