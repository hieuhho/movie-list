import React from 'react';

var Movie = (props) => (
  // console.log(props.state),

    <li className={props.state.watchedToggle ? "watched" : "not-watched"}>

        {props.movie.title}

    <button onClick={props.onClick}>{props.state.watchedToggle ? 'Watched' : 'To Watchlist'}</button>
    </li>
);

export default Movie;