import axios from "axios"

const API_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjI0ZDFhZGE0MGUzOWZmZDkyMTFlMTQxNTEyNTZjMCIsIm5iZiI6MS43NDYwMzYxMDIxMDMwMDAyZSs5LCJzdWIiOiI2ODEyNjU4NjkxMzU0OTMwY2QxNDU3ZmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WHiI2jH7mb4FYJ-BRtCRhnvbFhzmmOFf0oSYdLmpwl4";

const options = {
  headers: {
    Authorization: `Bearer ${API_ACCESS_TOKEN}`,
  }
}

export const fetchMovies = async () => {
  const response = await axios.get ('https://api.themoviedb.org/3/trending/movie/week', options)
  return response.data.results;
}

export const fetchMoviesByQuery = async query => {
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}`, options);
  return response.data.results;
}

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, options);
  return response.data;
}

export const fetchMovieCast = async movieId => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, options);
  return response.data.cast;
}

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, options);
  return response.data.results;
}