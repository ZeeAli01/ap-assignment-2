import data from "../movies.json";

// all movies
export const getAllMovies = async () => {
  return data.movies;
};

// trending movies
export const getTrendingMovies = async () => {
  const movies = await getAllMovies();
  return movies.filter((m) => m.releaseYear >= 2010 && m.rating >= 8.5);
};

// movie detail by id
export const getMovieDetails = async (id) => {
  const movies = await getAllMovies();
  const movie = movies.find((movie) => movie.id === id);
  if (movie) {
    const movieGenre = await getMovieGenreById(movie.genreId);
    const movieDirector = await getMovieDirectorById(movie.directorId);
    return {
      movie,
      movieGenre,
      movieDirector,
    };
  }
  return undefined;
};

// movie director by id
export const getMovieDirectorById = async (id) => {
  return data.directors.find((dir) => dir.id === id);
};

// movie genre by id
export const getMovieGenreById = async (id) => {
  return data.genres.find((gen) => gen.id === id);
};
//all directors:
export const getAllDirectors = async () => {
  return data.directors;
};
//all genres:
export const getAllGenres = async () => {
  return data.genres;
};
//movie list by genre id:
export const getMoviesByGenre = async (genreId) => {
  const movies = await getAllMovies();
  return movies.filter((m) => m.genreId === genreId);
};
//genre by id:
export const getGenreById = async (id) => {
  const genres = await getAllGenres();
  return genres.find((genre) => genre.id === id) || null;
};
