import React from 'react';
import Movie from './Movie.jsx';

var MoviesList = (props) => (
  <div className="moviesList">
  {props.watchedToggle ?
    <div className="Watched">
    <ul>
      {props.filterWatched.map((movie) => {
        return <Movie movie={movie} key={movie.id} watchedToggle={props.watchedToggle} handleInfo={props.handleInfo} moveToWatchList={props.moveToWatchList} />
      })}
    </ul>
  </div> : null }

  {!props.watchedToggle ?
    <div className="watchList">
    <ul>
      {props.filterWatchList.map((movie) => {
        return <Movie movie={movie} key={movie.id} watchedToggle={props.watchedToggle} handleInfo={props.handleInfo} moveToWatched={props.moveToWatched} />
      })}
    </ul>
  </div> : null }
  </div>
);

export default MoviesList;