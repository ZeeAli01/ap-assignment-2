import { getTrendingMovies } from "@/utils/movieUtils";
import { useRouter } from "next/router";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home(props) {
  const router = useRouter();
  const trendingNow = props.trendingNow;

  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <section className="mb-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to MovieHouse
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the best movies from around the world, all in one place.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => {
              router.push("/genres");
            }}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md"
          >
            Browse Genres
          </button>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Trending Now</h2>
          <Link
            href="/movies"
            className="text-red-600 hover:text-red-700 font-medium"
          >
            View All Movies →
          </Link>
        </div>

        {!trendingNow || trendingNow.length === 0 ? (
          <div className="text-center py-12 bg-gray-100 rounded-lg">
            <h2 className="text-xl text-gray-600">No trending movies found.</h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingNow.map((movie) => (
              <Link href={`/movies/${movie.id}`} key={movie.id}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 h-full">
                  <div className="bg-gray-200 h-48 flex items-center justify-center">
                    <span className="text-4xl">🎬</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {movie.title}
                    </h3>
                    <div className="flex items-center mb-2">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="text-gray-700">{movie.rating}</span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-700">{movie.releaseYear}</span>
                    </div>
                    <p className="text-gray-600 line-clamp-3">
                      {movie.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const trendingNow = await getTrendingMovies();

  return {
    props: {
      trendingNow,
    },
    notFound: trendingNow ? false : true,
    revalidate: 3600,
  };
}
