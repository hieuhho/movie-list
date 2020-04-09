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
      allMovies: props.moviesData,
      visibleMovies: [],
      userAdded: [],
      value: ''
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    let newMovie = this.state.allMovies.concat({id, title, released, director});

    if(this.state.value !== '') {
      this.setState({
        allMovies: newMovie,
        visibleMovies: this.state.userAdded.concat({id, title, released, director}),
        userAdded: this.state.userAdded.concat({id, title, released, director})
      })
    }

    this.setState({
      allMovies: newMovie,
      value: ''
    })
  }

  render() {
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
          <Search
            search={this.state.search}
            onChange={this.handleSearch}
            />
        </div>

        <div>
          <div className="addMovie">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Add Movie"
                value={this.state.value}
                onChange={this.handleChange} />
              <button type="submit">Add a Movie</button>
            </form>
          </div>
          {/* <AddMovie
            value={this.state.value}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit} /> */}
        </div>

        <div>
          <MoviesList
            state={this.state} />
        </div>

      </div>
    );
  }
};

export default App;
