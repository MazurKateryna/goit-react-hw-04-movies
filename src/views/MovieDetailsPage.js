import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';
import moviesApi from '../services/moviesApi';
import PropTypes from 'prop-types';

class MovieDetailsPage extends Component {
  static propTypes = {
    movies: PropTypes.array,
    movie: PropTypes.object,
    search: PropTypes.string,
    from: PropTypes.string,
  };
  
  state = {
    movies: [],
    movie: {},
    search: '',
    from: '',
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    moviesApi.fetchMovieDetails(movieId).then(movie => {
      this.setState({ movie });
    });

    this.props.location.state?.from &&
      this.setState({
        search: this.props.location.state.from.search,
        from: this.props.location.state.from.pathname,
      });
  }

  handleGoBack = () => {
    const {  history } = this.props;
    history.push(`${this.state.from}${this.state.search}`);
  };

  render() {
    const { match, location } = this.props;
    const movieId = this.props.match.params.movieId;
    const { movie } = this.state;

    return (
      <>
        {}
        <button type="button" onClick={this.handleGoBack} className="go-back">
          &larr; Go back
        </button>
        <div className="MovieDetailsPage">
          <div className="details-image-wrapper">
            {movie.poster_path && (
              <img
                className="details-image"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                width="300"
              />
            )}
          </div>
          <div className="details-content-wrapper">
            <h2 className="title">{movie.title}</h2>
            <span className="user-score">
              User score: {movie.vote_average * 10}%
            </span>
            <h3 className="over-view-title">Overview</h3>
            <p className="over-view">{movie.overview}</p>
            <h4 className="genres-title">Genres:</h4>
            {movie.genres && (
              <ul className="genres">
                {movie.genres.map(genre => (
                  <li key={genre.id} className="genre-item">
                    {genre.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <hr />
        <span className="additional-information-title">
          Additional information
        </span>
        <ul className="additional-information-list">
          <li className="additional-information-item">
            <NavLink
              to={{ pathname: `${match.url}/cast`, state: location.state }}
              activeClassName="additional-information-item-link"
            >
              Cast
            </NavLink>
          </li>
          <li className="additional-information-item">
            <NavLink
              to={{ pathname: `${match.url}/reviews`, state: location.state }}
              activeClassName="additional-information-item-link"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route
            path={`${match.path}/cast`}
            render={props => <Cast {...props} movieId={movieId} />}
          />
          <Route
            path={`${match.path}/reviews`}
            render={props => <Reviews {...props} movieId={movieId} />}
          />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;