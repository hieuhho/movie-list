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
      movies: props.moviesData,
      value: ''
    };
  }

  handleSearch(event) {
    this.setState({
      search: event.target.value
    })
  }

  handleChange(event) {
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

    this.setState({
      movies: this.state.movies.concat({id, title, released, director})
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
            onChange={this.handleSearch.bind(this)}
            />
        </div>

        <div>
          <AddMovie
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}
          />
        </div>

        <div>
          <MoviesList
            moviesData={this.state} />
        </div>

      </div>
    );
  }
};

export default App;


{/* <div className="search-bar">
  <input
    type="text"
    placeholder='Search something...'
    value={this.state.search}
    onChange={(event) => this.handleSearch(event)}
    onSubmit={(event) => this.addMovie(event)} />

    <form onSubmit={props.onSubmit}>
    <input type="text" ref="title" />
    <button type="submit">Add a Movie</button>
    </form>
  <button>Search!</button>
</div> */}
{/* <div className="moviesList">
<ul>
{this.props.moviesData.filter((movie) =>
      {
        return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }).map((movie) => {
  return <Movie movie={movie} key={movie.id} />
})}
</ul>
</div> */}