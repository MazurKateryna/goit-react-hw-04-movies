import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const API_key = '3ba1f7e4c0d5f21f8eeb4102362e6edf';

const fetchMovieWithQuery = searchQuery => {
  return axios
    .get(
      `${baseURL}/search/movie?query=${searchQuery}&api_key=${API_key}&language=en-US&page=1&include_adult=false`,
    )
    .then(response => response.data.results);
};

const fetchMovieTrending = () => {
  return axios
    .get(`${baseURL}/trending/movies/day?api_key=${API_key}`)
    .then(response => response.data.results);
};

const fetchMovieDetails = movieId => {
  return axios
    .get(`${baseURL}/movie/${movieId}?api_key=${API_key}`)
    .then(response => response.data);
};

const fetchCast = movieId => {
  return axios
    .get(`${baseURL}/movie/${movieId}/credits?api_key=${API_key}`)
    .then(response => response.data.cast);
};

const fetchReview = movieId => {
  return axios
    .get(
      `${baseURL}/movie/${movieId}/reviews?api_key=${API_key}&language=en-US&page=1`,
    )
    .then(response => response.data.results);
};

export default {
  fetchMovieDetails,
  fetchCast,
  fetchReview,
  fetchMovieTrending,
  fetchMovieWithQuery,
};