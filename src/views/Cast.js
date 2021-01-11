import React, { Component } from 'react';
import moviesApi from '../services/moviesApi';
import PropTypes from 'prop-types';

export class Cast extends Component {
  static propTypes = {
    movies: PropTypes.array,
    cast: PropTypes.array,
  };

  state = {
    movies: [],
    cast: [],
  };

  componentDidMount() {
    moviesApi.fetchCast(this.props.movieId).then(cast => {
      this.setState({ cast });
    });
  };

  render() {
    const { cast } = this.state;

    return (
      <>
        {cast && (
          <ul>
            {cast.map(actor => (
              <li key={actor.credit_id}>
                {actor.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                    alt={actor.name}
                    width="100"
                  />
                )}
                <h4 className="cast-name">{actor.name}</h4>
                <span className="cast-character">
                  Character: {actor.character}
                </span>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Cast;