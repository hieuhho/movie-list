import React from 'react';
import Search from './Search.jsx';
import Movie from './Movie.jsx';
import MoviesList from './MoviesList.jsx';
import moviesData from './moviesData.js';
import AddMovie from './AddMovie.jsx';
import MovieInfo from './MovieInfo.jsx';
import API_KEY from './api_key.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      value: '',
      allMovies: props.moviesData,
      watchList: [],
      addMovie: [],
      watchedToggle: true,
      infoClicked: false,
      selectedMovie: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleWatch = this.toggleWatch.bind(this);
    this.moveToWatched = this.moveToWatched.bind(this);
    this.moveToWatchList = this.moveToWatchList.bind(this);
    this.handleInfo = this.handleInfo.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
    this.addMovieData = this.addMovieData.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  searchMovie(query) {
    let self = this;
    $.ajax({
      url: "https://api.themoviedb.org/3/search/movie?",
      type: "GET",
      data: {
        api_key: API_KEY,
        query: query,
      },
      contentType: "application/json",
      success: (response) => {
        console.log('response: ', response.results[0])
        this.addMovieData(response.results[0])},
      error: function(response) {
        console.error('ajax error search movie', response)
      }
    })
  }


  addMovieData(movieObjData) {
    let newMovieInfo = [{
      id: movieObjData.id,
      title: movieObjData.title,
      release_date: movieObjData.release_date,
      vote: movieObjData.vote_average,
      overview: movieObjData.overview
    }]
    let addToAll = this.state.allMovies.concat(newMovieInfo)
    this.setState({
      allMovies: addToAll
    })
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    this.searchMovie(this.state.search)
  }

  handleSearch(event) {
    this.setState({
      search: event.target.value,
      visibleMovies: this.state.allMovies
    })
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    let title = tpushhis.state.value;
    let release_date = 'May 22, 1995';
    let director = 'Hieu Ho';
    let runtime = 1234;
    let vote_average = 322;
    let id = Math.floor(Math.random() * 100);
    let watchedToggle = false;handleSearchSubmit

    let newMovie = this.state.allMovies.concat({id, title, release_date, director, watchedToggle, runtime, vote_average});

    if(this.state.value !== '') {
      this.setState({
        allMovies: newMovie,
        visibleMovies: this.state.addMovie.concat({id, title, release_date, director, watchedToggle, runtime, vote_average}),
        addMovie: this.state.addMovie.concat({id, title, release_date, director, watchedToggle, runtime, vote_average})
      })
    }

    this.setState({
      allMovies: newMovie,
      value: ''
    })
  }

  toggleWatch(event){
    event.preventDefault();
    console.log('is Toggled', this.state.watchedToggle)
    this.setState({
      watchedToggle: !this.state.watchedToggle
    })
  }

  moveToWatchList(event) {
    let copy = this.state.allMovies.slice();
    for (var i = 0; i < copy.length; i++) {
      if (copy[i].title === event.target.value) {
        let removed = copy.splice(i, 1);
        let newMovie = this.state.watchList.concat(removed)
        this.setState({
          allMovies: copy,
          watchList: newMovie
        })
      }
    }
  }

  moveToWatched(event) {
    let copy = this.state.watchList.slice();
    for (var i = 0; i < copy.length; i++) {
      if (copy[i].title === event.target.value) {
        let removed = copy.splice(i, 1);
        let newMovie = this.state.allMovies.concat(removed)
        this.setState({
          allMovies: newMovie,
          watchList: copy
        })
      }
    }
  }

  handleInfo(event) {
    event.preventDefault();
    let current = event.currentTarget.dataset.id;
        this.setState({
          infoClicked: !this.state.infoClicked,
          selectedMovie: current
        })
        console.log('this.state.infoClicked: ', this.state.infoClicked);
      }


  render() {

    let filterWatched = this.state.allMovies.filter((movie) => {return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;});

    let filterWatchList = this.state.watchList.filter((movie) => {return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;});

    return (

      <div>

        <nav className="top-nav">
          <div className="header-logo">
            <h1>HieuFlix</h1>
          </div>
          <div className="subheading">
            <h5>Hieu's recommendations</h5>
          </div>
        </nav>

        <div>
          <AddMovie handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>

        <div>
          <button className="watchedTab" onClick={!this.state.watchedToggle ? this.toggleWatch : null}>Watched</button>

          <button className="watchListTab" onClick={this.state.watchedToggle ? this.toggleWatch : null}>Watch List</button>

          <Search search={this.state.search} handleSearch={this.handleSearch} handleSearchSubmit={this.handleSearchSubmit}/>
        </div>

        <div>
          <MoviesList
            filterWatched={filterWatched}
            filterWatchList={filterWatchList}
            watchedToggle={this.state.watchedToggle}
            handleInfo={this.handleInfo}
            moveToWatchList={this.moveToWatchList}
            moveToWatched={this.moveToWatched}
            infoToggle={this.state.infoClicked}
            selected={this.state.selectedMovie}/>
        </div>

      </div>
    );
  }
};

export default App;