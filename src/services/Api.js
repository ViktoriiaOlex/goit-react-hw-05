import axios from 'axios';

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDUxMjM1YWY1OTBjMWRkMzA2OWIxZDg4YzFmNjc5NSIsInN1YiI6IjY2MGQ1NTUxYzhhNWFjMDE3YzdiMWEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d0GOlY3fqf7rjJ2iYssR0foE9I9tRDV8l6qwRdKH2Dw";

const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const requestTrendingMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );
  return response.data;
};

export const requestMovieById = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return response.data;
};

export const requestCastById = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    options
  );
  return response.data.cast;
};

export const requestReviewsById = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    options
  );
  return response.data.results;
};

export const requestMovieByQuery = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US`,
    options
  );
  return response.data.results;
};