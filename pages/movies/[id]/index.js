import { getAllMovies, getMovieDetails } from "@/utils/movieUtils";
import { useRouter } from "next/router";
import Link from "next/link";

export default function MovieDetails(props) {
  const router = useRouter();
  const { movieDetails } = props;

  if (router.isFallback) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (!movieDetails) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Movie not found!
        </h1>
        <Link href="/movies" className="text-red-600 hover:text-red-700">
          Browse all movies
        </Link>
      </div>
    );
  }

  const { movie, movieGenre, movieDirector } = movieDetails;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gray-800 h-64 flex items-center justify-center">
        <span className="text-6xl">🎬</span>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap items-center mb-4">
          <h1 className="text-3xl font-bold text-gray-800 mr-4">
            {movie.title}
          </h1>
          <span className="bg-red-600 text-white text-sm font-medium px-2.5 py-0.5 rounded">
            {movieGenre.name}
          </span>
        </div>

        <div className="flex items-center mb-6">
          <div className="flex items-center mr-6">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-[orange]">{movie.rating}</span>
          </div>
          <div className="text-gray-600">{movie.releaseYear}</div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Overview</h2>
          <p className="text-gray-600">{movie.description}</p>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Director
            </h2>
            <div className="flex items-start">
              <div className="bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                <span className="text-xl">👤</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">
                  {movieDirector.name}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {movieDirector.biography}
                </p>
                <Link
                  href={`/movies/${movieDirector.id}/director`}
                  className="inline-block mt-2 text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  View Director Details
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <Link
            href="/movies"
            className="text-red-600 hover:text-red-700 font-medium"
          >
            ← Back to Movies
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const movieDetails = await getMovieDetails(id);

  if (!movieDetails) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      movieDetails,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const allMovies = await getAllMovies();
  const paths = allMovies.map((movie) => {
    return { params: { id: movie.id } };
  });
  return {
    paths: paths,
    fallback: true,
  };
}
