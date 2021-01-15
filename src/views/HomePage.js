import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import moviesApi from '../services/moviesApi';
import PropTypes from 'prop-types';

class HomePage extends Component {
  static propTypes = {
    movies: PropTypes.array,
  };

  state = {
    movies: [],
  };

  componentDidMount() {
    moviesApi.fetchMovieTrending().then(movies => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    const { match } = this.props;
    
    return (
      <>
        {movies.length > 0 && (
          <ul className="movies-list">
            {movies.map(movie => (
              <li key={movie.id} className="movies-item">
                <NavLink
                  className="movies-item-link"
                  activeClassName="movies-item-link-active"
                  to={`${match.url}movies/${movie.id}`}
                >
                  {movie.title}{movie.name}
                <div>
                  {movie.poster_path && (
                    <img
                      className="details-image"
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                      width="80"
                    />
                  )}
                </div>
                </NavLink>
                
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default HomePage;