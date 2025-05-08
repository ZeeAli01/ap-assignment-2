import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Layout({ children }) {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <header className={`${isDark ? 'bg-gray-800 shadow-gray-700' : 'bg-white shadow-md'}`}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold text-red-600 flex items-center"
            >
              <span className="mr-2">🎬</span> MovieHouse
            </Link>
            <div className="flex items-center space-x-6">
              <Link
                href="/"
                className={`font-medium ${
                  router.pathname === "/"
                    ? "text-red-600"
                    : isDark 
                      ? "text-gray-300 hover:text-red-500" 
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
                    : isDark 
                      ? "text-gray-300 hover:text-red-500" 
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
                    : isDark 
                      ? "text-gray-300 hover:text-red-500" 
                      : "text-gray-700 hover:text-red-600"
                }`}
              >
                Genres
              </Link>
              <Link
                href="/directors"
                className={`font-medium ${
                  router.pathname.startsWith("/directors")
                    ? "text-red-600"
                    : isDark 
                      ? "text-gray-300 hover:text-red-500" 
                      : "text-gray-700 hover:text-red-600"
                }`}
              >
                Directors
              </Link>
              <Link
                href="/help"
                className={`font-medium ${
                  router.pathname.startsWith("/help")
                    ? "text-red-600"
                    : isDark 
                      ? "text-gray-300 hover:text-red-500" 
                      : "text-gray-700 hover:text-red-600"
                }`}
              >
                Help
              </Link>
              <button 
                onClick={toggleTheme}
                className={`ml-4 p-2 rounded-full flex items-center justify-center transition-colors ${
                  isDark 
                    ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
                aria-label="Toggle theme"
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDark ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

      {/* Footer */}
      <footer className={`${isDark ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'} py-8`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">MovieHouse</h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-300'}`}>Your ultimate movie database</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3">Explore</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/movies"
                      className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-300 hover:text-white'}`}
                    >
                      All Movies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/genres"
                      className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-300 hover:text-white'}`}
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
                      className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-300 hover:text-white'}`}
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/help/contact"
                      className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-300 hover:text-white'}`}
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/help/privacy"
                      className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-300 hover:text-white'}`}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`mt-8 pt-6 border-t ${isDark ? 'border-gray-800' : 'border-gray-700'} text-center ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            <p>© {new Date().getFullYear()} MovieHouse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}