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
      watchedToggle: false
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleWatch = this.toggleWatch.bind(this);
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
    console.log(this.state.watchedToggle)
    this.setState({
      watchedToggle: !this.state.watchedToggle
    })
  }

  moveBetweenLists(event) {
    if (document.getElementByID("filterID").className === "Watched") {
      let copy = this.state.allMovies.slice();
      for (var i = 0; i < copy.length; i++) {
        if (copy[i].title === event.target.value) {
          copy.splice(i, 1);
          let newMovie = this.state.watchList.concat({title: event.target.value})
          this.setState({
            allMovies: copy,
            watchList: newMovie
          })
          break;
        }
      }
    } else if (document.getElementByID("filterID").className === "watchList") {
      let copy = this.state.watchList.slice();
      for (var i = 0; i < copy.length; i++) {
        if (copy[i].title === event.target.value) {
          copy.splice(i, 1);
          let newMovie = this.state.allMovies.concat({title: event.target.value})
          this.setState({
            allMovies: newMovie,
            watchList: copy
          })
          break;
        }
      }
    }
  }

  render() {

    let filterWatched = this.state.allMovies.filter((movie) => {return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;});

    let filterToWatch = this.state.watchList.filter((movie) => {return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;});

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
          <button className="watchedTab" onClick={this.state.watchedToggle ? this.toggleWatch : null}>Watched</button>

          <button className="watchlistTab" onClick={!this.state.watchedToggle ? this.toggleWatch : null}>Watch List</button>
        </div>

        <div>
          <MoviesList state={this.state} onClick={this.moveBetweenLists} filterWatched={filterWatched} filterToWatch={filterToWatch} />
        </div>

      </div>
    );
  }
};

export default App;
