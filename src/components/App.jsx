import React from 'react';
import Search from './Search.jsx';
import Movie from './Movie.jsx';
import MoviesList from './MoviesList.jsx';
import moviesData from './moviesData.js';
import AddMovie from './AddMovie.jsx';
import MovieInfo from './MovieInfo.jsx'

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
      infoClicked: false
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleWatch = this.toggleWatch.bind(this);
    this.moveToWatched = this.moveToWatched.bind(this);
    this.moveToWatchList = this.moveToWatchList.bind(this);
    this.handleInfo = this.handleInfo.bind(this);
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

  handleInfo(event) {
    event.preventDefault();
    this.setState({
      infoClicked: !this.state.infoClicked
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

          <Search search={this.state.search} onChange={this.handleSearch} changetile={this.changeTitle}/>
        </div>

        <div>
          <MoviesList
            filterWatched={filterWatched}
            filterWatchList={filterWatchList}
            watchedToggle={this.state.watchedToggle}
            handleInfo={this.handleInfo}
            moveToWatchList={this.moveToWatchList}
            moveToWatched={this.moveToWatched}
            infoToggle={this.state.infoClicked} />
        </div>

      </div>
    );
  }
};

export default App;