import React from 'react';
import Movie from './Movie.jsx';

var MoviesList = (props) => (
  <div className="moviesList">
      {!props.state.watchedToggle ?
      <div id="filterID" className="Watched">
        <ul>
          {props.filterWatched.map((movie) => {
            return <Movie movie={movie} key={movie.id} state={props.state} onClick={props.onClick}/>
          })}
        </ul>
      </div> : null }

      {props.state.watchedToggle ?
      <div id="filterID" className="watchList">
        <ul>
          {props.filterToWatch.map((movie) => {
            return <Movie movie={movie} key={movie.id} state={props.state} onClick={props.onClick}/>
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