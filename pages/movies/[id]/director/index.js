import { getDirectorDetails } from "@/utils/movieUtils"; // or directorUtils
import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

export default function DirectorsPage() {
  const router = useRouter();
  const { id } = router.query;

  const fetcher = () => getDirectorDetails(id);
  const { data, error, isLoading } = useSWR(`director-${id}`, fetcher);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <p className="text-red-600 text-lg mb-4">
          Error loading director information
        </p>
        <Link
          href="/movies"
          className="text-red-600 hover:text-red-700 font-medium"
        >
          Back to Movies
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gray-800 h-48 flex items-center justify-center">
        <span className="text-6xl">👤</span>
      </div>

      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Director Profile
        </h1>

        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="bg-gray-200 rounded-full h-16 w-16 flex items-center justify-center mr-4">
              <span className="text-2xl">👤</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {data.name}
            </h2>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Biography
            </h3>
            <p className="text-gray-600">{data.biography}</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Directed</h3>
          {data.movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-50 p-4 rounded-lg mb-4 flex items-center"
            >
              <div className="bg-gray-200 h-12 w-12 flex items-center justify-center mr-4 rounded">
                <span className="text-xl">🎬</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">{movie.title}</h4>
                <p className="text-gray-600 text-sm">
                  {movie.releaseYear} • {movie.rating} ★ • {movie.genre}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
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
