import { getAllGenres } from "@/utils/movieUtils";
import Link from "next/link";

export default function GenreListPage({ genres }) {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 dark:text-white">Movie Genres</h1>
        <p className="text-gray-600 dark:text-white">Browse movies by your favorite genres</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {genres.map((genre) => (
          <Link href={`/genres/${genre.id}`} key={genre.id}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 text-center">
              <div className="text-4xl mb-4">
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
              <h2 className="text-xl font-bold text-gray-800">{genre.name}</h2>
              <div className="mt-4 text-red-600 hover:text-red-700">
                Browse Movies →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const genres = await getAllGenres();

  return {
    props: {
      genres,
    },
  };
}
