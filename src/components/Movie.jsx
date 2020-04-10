import React from 'react';
import MovieInfo from './MovieInfo.jsx'

var Movie = (props) => (
  <div className="movies">

    {props.watchedToggle ?
      <li key={props.movie.id}>
        <span value={props.movie.title} onClick={props.handleInfo}> {props.movie.title} </span>

        {props.infoToggle &&

        // <MovieInfo movie={props.movie} />

          <div className='movieInfo'>
            <div className='leftInfo'>
              <div>Director: {props.movie.director}</div>
              <div>Released Date: {props.movie.released}</div>
            </div>
         </div>}

        <button value={props.movie.title} onClick={props.moveToWatchList}>Add To WatchList</button>
      </li> : null
    }

    {!props.watchedToggle ?
      <li key={props.movie.id}>
        <span value={props.movie.title} onClick={props.handleInfo}> {props.movie.title} </span>

        {props.infoToggle && <div className='movieInfo'>
          <div className='leftInfo'>
            <div>Released Date: {props.movie.released}</div>
            <div>Director: {props.movie.director}</div>
          </div>
        </div>}

        <button value={props.movie.title} onClick={props.moveToWatched}>Add To Watched</button>
      </li> : null
    }

  </div>


);

export default Movie;