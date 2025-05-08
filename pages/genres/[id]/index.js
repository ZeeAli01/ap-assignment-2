import { getMoviesByGenre, getGenreById } from "@/utils/movieUtils";
import Link from "next/link";

export default function GenreMoviesPage({ genre, movies }) {
  if (!genre) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 text-xl mb-4">Genre not found.</div>
        <Link
          href="/genres"
          className="text-red-600 hover:text-red-700 font-medium"
        >
          Browse All Genres
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 ">
        <div className="flex items-center mb-2 ">
          <h1 className="text-3xl font-bold text-gray-800 mr-3 dark:text-white">
            {genre.name}
          </h1>
          <div className="text-3xl ">
            {genre.name === "Science Fiction"
              ? "🚀"
              : genre.name === "Adventure"
              ? "🌍"
              : genre.name === "Drama"
              ? "🎭"
              : genre.name === "Thriller"
              ? "😱"
              : "🎬"}
          </div>
        </div>
        <p className="text-gray-600 dark:text-white">
          Browse all {genre.name} movies in our collection
        </p>
      </div>

      {movies.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-600 text-lg mb-4">
            No movies found in this genre.
          </p>
          <Link
            href="/genres"
            className="text-red-600 hover:text-red-700 font-medium"
          >
            Browse Other Genres
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
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
                  <div className="mt-4 text-red-600 hover:text-red-700">
                    View Details →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const res = await fetch(`http://localhost:3000/api/genres/${id}/movies`);
    const json = await res.json();

    if (!json.success) {
      return {
        props: {
          genre: null,
          movies: [],
        },
      };
    }

    return {
      props: {
        genre: json.data.genre,
        movies: json.data.movies.map((m) => ({
          id: m.id,
          title: m.title,
          rating: m.rating,
          releaseYear: m.release_year, 
        })),
      },
    };
  } catch (error) {
    return {
      props: {
        genre: null,
        movies: [],
      },
    };
  }
}
