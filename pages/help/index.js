import Link from "next/link";

export default function HelpHome() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Help Center</h1>
        <p className="text-gray-600">
          Find answers to your questions about MovieHouse
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/help/faqs">
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 text-center">
            <div className="text-4xl mb-4">❓</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">FAQs</h2>
            <p className="text-gray-600 mb-4">
              Find answers to frequently asked questions
            </p>
            <span className="text-red-600 hover:text-red-700">View FAQs →</span>
          </div>
        </Link>

        <Link href="/help/contact">
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 text-center">
            <div className="text-4xl mb-4">📧</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              Get in touch with our support team
            </p>
            <span className="text-red-600 hover:text-red-700">
              Contact Us →
            </span>
          </div>
        </Link>

        <Link href="/help/privacy">
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Privacy Policy
            </h2>
            <p className="text-gray-600 mb-4">
              Learn about how we protect your data
            </p>
            <span className="text-red-600 hover:text-red-700">
              Read Policy →
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
