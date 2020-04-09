import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';
import Search from './components/Search.jsx';
import MoviesList from './components/MoviesList.jsx';
import Movie from './components/Movie.jsx';

import moviesData from './components/moviesData.js'

ReactDOM.render(<App moviesData={moviesData}/>, document.getElementById('app'));
