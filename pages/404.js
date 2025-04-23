import Link from "next/link";

export default function Error404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="text-9xl font-bold text-red-600 mb-4">404</div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
      <p className="text-xl text-gray-600 max-w-md mb-8">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/">
        <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}
