import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold text-red-600 flex items-center"
            >
              <span className="mr-2">🎬</span> MovieHouse
            </Link>
            <div className="flex space-x-6">
              <Link
                href="/"
                className={`font-medium ${
                  router.pathname === "/"
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                Home
              </Link>
              <Link
                href="/movies"
                className={`font-medium ${
                  router.pathname.startsWith("/movies")
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                Movies
              </Link>
              <Link
                href="/genres"
                className={`font-medium ${
                  router.pathname.startsWith("/genres")
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                Genres
              </Link>
              <Link
                href="/help"
                className={`font-medium ${
                  router.pathname.startsWith("/help")
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                Help
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">MovieHouse</h3>
              <p className="text-gray-300">Your ultimate movie database</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3">Explore</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/movies"
                      className="text-gray-300 hover:text-white"
                    >
                      All Movies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/genres"
                      className="text-gray-300 hover:text-white"
                    >
                      Genres
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Help</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/help/faqs"
                      className="text-gray-300 hover:text-white"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/help/contact"
                      className="text-gray-300 hover:text-white"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/help/privacy"
                      className="text-gray-300 hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
            <p>© {new Date().getFullYear()} MovieHouse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
