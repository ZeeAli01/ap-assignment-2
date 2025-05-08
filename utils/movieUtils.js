import data from "../movies.json";

// all movies
export const getAllMovies = async () => {
  const res = await fetch("http://localhost:3000/api/movies");
  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }
  const json = await res.json();
  return json.data.map(movie => ({
    id: movie.id,
    title: movie.title,
    description: movie.description,
    releaseYear: movie.release_year,
    genreId: movie.genre_id,
    rating: movie.rating,
    directors: movie.directors,
    genres: movie.genres
  }));
};

// trending movies
export const getTrendingMovies = async () => {
  const movies = await getAllMovies();
  return movies.filter((m) => m.releaseYear >= 2010 && m.rating >= 8.5);
};

// movie detail by id
export const getMovieDetails = async (id) => {

  const res = await fetch(`http://localhost:3000/api/movies/${id}`);
  if (!res.ok) {
    return undefined;
  }
  const json = await res.json();
  const movie = json.data;
  return {
    movie: {
      id: movie.id,
      title: movie.title,
      description: movie.description,
      releaseYear: movie.release_year,
      genreId: movie.genre_id,
      rating: movie.rating,
    },
    movieGenre: {
      id: movie.genres.id,
      name: movie.genres.name,
    },
    movieDirector: {
      id: movie.directors.id,
      name: movie.directors.name,
      biography: movie.directors.biography,
    },
  };
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
  const res = await fetch("http://localhost:3000/api/genres");
  if (!res.ok) {
    throw new Error('Failed to fetch genres');
  }
  const json = await res.json();
  return json.data.map(genre => ({
    id: genre.id,
    name: genre.name
  }));
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

export const getDirectorDetails = async (id) => {


  const res = await fetch(`http://localhost:3000/api/directors/${id}`);
  if (!res.ok) {
    return undefined;
  }

  const json = await res.json();
  const director = json.data;

  return {
    id: director.id,
    name: director.name,
    biography: director.biography,
    movies: director.movies.map((movie) => ({
      id: movie.id,
      title: movie.title,
      releaseYear: movie.release_year,
      rating: movie.rating,
      genre: movie.genres.name,
    })),
  };
};
