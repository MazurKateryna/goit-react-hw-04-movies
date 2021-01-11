import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import moviesApi from '../services/moviesApi';
import Searchbox from '../components/Searchbox';
import getQueryParams from '../utils/getQueryParams';

class MoviesPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { location } = this.props;
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(location.search);

    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  handleChangeQuery = query => {
    const { location, history } = this.props;
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  fetchMovies = query => {
    moviesApi
      .fetchMovieWithQuery(query)
      .then(movies => this.setState({ movies }));
  };

  render() {
    const { movies } = this.state;
    const { match, location } = this.props;

    return (
      <div>
        <Searchbox onSubmit={this.handleChangeQuery} />
        {movies && (
          <ul className="movies-list">
            {movies.map(movie => (
              <li key={movie.id} className="movies-item">
                <NavLink
                  className="movies-item-link"
                  activeClassName="movies-item-link-active"
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: { from: location },
                  }}
                >
                  {movie.title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default MoviesPage;