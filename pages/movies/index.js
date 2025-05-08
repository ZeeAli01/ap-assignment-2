import { useState } from "react";
import { getAllMovies, getAllGenres } from "@/utils/movieUtils";
import Link from "next/link";

export default function AllMovies({ movies, genres }) {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleGenreChange = (event) => {
    const genreId = event.target.value;
    setSelectedGenre(genreId);

    if (genreId) {
      const filtered = movies.filter((movie) => movie.genreId === genreId);
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 dark:text-white">All Movies</h1>
        <p className="text-gray-600 dark:text-white">Browse our collection of amazing films</p>
      </div>

      <div className="mb-8 p-4 bg-white rounded-lg shadow">
        <label
          htmlFor="genre-select"
          className="block text-sm font-medium text-gray-700 mb-2 dark:text-black"
        >
          Filter by Genre:
        </label>
        <select
          id="genre-select"
          value={selectedGenre}
          onChange={handleGenreChange}
          className="w-full md:w-64 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:text-black"
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMovies.map((movie) => (
          <Link href={`/movies/${movie.id}`} key={movie.id}>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-full">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-4xl">🎬</span>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {movie.title}
                </h2>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span className="text-gray-700">{movie.rating}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-700">{movie.releaseYear}</span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    {genres.find((g) => g.id === movie.genreId)?.name ||
                      "Unknown"}
                  </span>
                  <span className="text-red-600 hover:text-red-700">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const movies = await getAllMovies();
    const genres = await getAllGenres();
  
    return {
      props: {
        movies,
        genres,
      },
      notFound: !movies ,
      revalidate: 3600,
    };
  }  catch (error) {
    return { props: { movies: [], genres: [] } };
  }
}
