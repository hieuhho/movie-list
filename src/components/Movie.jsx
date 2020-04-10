import React from 'react';

var Movie = (props) => (
  <div>
    {props.watchedToggle ?
      <li key={props.movie.id}>
        <a href="#" style={{textDecoration:'none'}} data-id={props.movie.title} onClick={props.handleInfo}> {props.movie.title} </a>
        <button value={props.movie.title} onClick={props.moveToWatchList}>Add To WatchList</button>
      </li> : null
    }
    {!props.watchedToggle ?
      <li key={props.movie.id}>
        <a href="#" style={{textDecoration:'none'}} data-id={props.movie.title} onClick={props.handleInfo}> {props.movie.title} </a>
        <button value={props.movie.title} onClick={props.moveToWatched}>Add To Watched</button>
      </li> : null
    }

  </div>


);

export default Movie;