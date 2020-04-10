import React from 'react';
import Movie from './Movie.jsx';

var MoviesList = (props) => (
  <div className="moviesList">

      {!props.state.watchedToggle ?
      <div className="Watched">
        <ul>
          {props.filterWatched.map((movie) => {
            return
              <li key={movie.id} >
                {movie.title}
                <button value={movie.title}
                onClick={props.addToWatchList}>Add To WatchList</button>
             </li>
          })}
        </ul>
      </div> : null }

      {props.state.watchedToggle ?
      <div className="watchList">
        <ul>
          {props.filterToWatch.map((movie) => {
            return
            <li key={movie.id} >
              {movie.title}
            <button value={movie.title}
            onClick={props.addToWatched}>Add To Watched</button>
            </li>
          })}
        </ul>
      </div> : null }

  </div>
);

export default MoviesList;
// (
  //   <div className="movie">
  //     <li>
  //       {movie.title}
  //       <button onClick={props.onClick}>Watched</button>
  //     </li>
  //   </div>)
  {/* {props.state.allMovies.filter((movie) =>
        {
          return movie.title.toLowerCase().indexOf(props.state.search.toLowerCase()) !== -1;
        }).map((movie) => {
    return <Movie movie={movie} key={movie.id} onClick={props.onClick} state={props.state}/>
  })} */}