import React from 'react';
import Search from './Search.jsx';
import Movie from './Movie.jsx';
import MoviesList from './MoviesList.jsx';
import moviesData from './moviesData.js';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      value: '',
      allMovies: props.moviesData,
      watchList: [],
      visibleMovies: [],
      addMovie: [],
      watchedToggle: true
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleWatch = this.toggleWatch.bind(this);
    this.moveToWatched = this.moveToWatched.bind(this);
    this.moveToWatchList = this.moveToWatchList.bind(this);
  }

  componentDidMount() {
    this.checkVisible();
  }

  checkVisible() {
    if (this.state.visibleMovies.length === 0) {
      this.setState({
        visibleMovies: this.state.allMovies
      })
    }
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

    let title = this.state.value;
    let released = 'Unknown';
    let director = 'Hieu Ho';
    let id = Math.floor(Math.random() * 100);
    let watchedToggle = false;

    let newMovie = this.state.allMovies.concat({id, title, released, director, watchedToggle});

    if(this.state.value !== '') {
      this.setState({
        allMovies: newMovie,
        visibleMovies: this.state.addMovie.concat({id, title, released, director, watchedToggle}),
        addMovie: this.state.addMovie.concat({id, title, released, director, watchedToggle})
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
          <Search search={this.state.search} onChange={this.handleSearch}/>
        </div>

        <div>
          <AddMovie onChange={this.handleChange} onSubmit={this.handleSubmit} />
        </div>

        <div>
          <button className="tab" onClick={!this.state.watchedToggle ? this.toggleWatch : null}>Watched</button>

          <button className="tab" onClick={this.state.watchedToggle ? this.toggleWatch : null}>Watch List</button>
        </div>

        <div>
        <div className="moviesList">
          {this.state.watchedToggle ?
            <div className="Watched">
            <ul>
              {filterWatched.map((movie) => {
                return <li key={movie.id}>
                    {movie.title}
                    <button value={movie.title} onClick={this.moveToWatchList}>Add To WatchList</button>
                </li>
              })}
            </ul>
          </div> : null }

          {!this.state.watchedToggle ?
            <div className="watchList">
            <ul>
              {filterWatchList.map((movie) => {
                return <li key={movie.id}>
                  {movie.title}
                <button value={movie.title} onClick={this.moveToWatched}>Add To Watched</button>
                </li>
              })}
            </ul>
          </div> : null }
          </div>

        </div>

      </div>
    );
  }
};

export default App;

{/* <MoviesList state={this.state} onClick={this.moveBetweenLists} filterWatched={filterWatched} filterToWatch={filterToWatch} /> */}