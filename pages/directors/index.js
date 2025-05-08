import Link from "next/link";

export default function DirectorListPage({ directors }) {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 dark:text-white">Movie Directors</h1>
        <p className="text-gray-600 dark:text-white">Discover the visionaries behind your favorite films</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {directors.map((director) => (
          <div
            key={director.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 text-center"
          >
            <div className="text-4xl mb-4">🎬</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">{director.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{director.biography}</p>
            <Link
              href={`/movies/${director.id}/director`}
              className="text-red-600 hover:text-red-700 font-medium"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("http://localhost:3000/api/directors");
    const json = await res.json();

    return {
      props: {
        directors: json.success ? json.data : [],
      },
    };
  } catch (error) {
    return {
      props: {
        directors: [],
      },
    };
  }
}
