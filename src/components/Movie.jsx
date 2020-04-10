import React from 'react';
import MovieInfo from './MovieInfo.jsx'

var Movie = (props) => (
  <div className="movies">

    {props.watchedToggle ?
      <li key={props.movie.id}>
        <span data-id={props.movie.title} onClick={props.handleInfo}> {props.movie.title} </span>

        {props.infoToggle && (props.selected === props.movie.title) && <MovieInfo movie={props.movie} /> }

        <button value={props.movie.title} onClick={props.moveToWatchList}>Add To WatchList</button>
      </li> : null}

    {!props.watchedToggle ?
      <li key={props.movie.id}>
        <span data-id={props.movie.title} onClick={props.handleInfo}> {props.movie.title} </span>

        {props.infoToggle && (props.selected === props.movie.title) && <MovieInfo movie={props.movie} /> }

        <button value={props.movie.title} onClick={props.moveToWatched}>Add To Watched</button>
      </li> : null}

  </div>


);

export default Movie;