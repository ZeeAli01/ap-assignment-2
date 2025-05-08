import { useRouter } from "next/router";
import Link from "next/link";

export default function HelpSlugPage() {
  const router = useRouter();
  const { slug = [] } = router.query;

  const section = slug[0] || "home";

  const contentMap = {
    faqs: (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 ">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              How do I search for movies?
            </h3>
            <p className="text-gray-600">
              You can use the search bar at the top of the page or browse by
              genres.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Are all movies available to watch?
            </h3>
            <p className="text-gray-600">
              MovieHouse is a movie database, not a streaming service. We
              provide information about movies.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              How often is the database updated?
            </h3>
            <p className="text-gray-600">
              We update our database weekly with new releases and information.
            </p>
          </div>
        </div>
      </div>
    ),
    contact: (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Have questions or feedback? We'd love to hear from you!
        </p>

        <div className="space-y-4">
          <div className="flex items-center">
            <div className="bg-gray-100 rounded-full p-2 mr-3">
              <span className="text-xl">📧</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Email</h3>
              <p className="text-gray-600">support@moviehouse.example.com</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-gray-100 rounded-full p-2 mr-3">
              <span className="text-xl">📱</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    ),
    privacy: (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Privacy Policy</h2>

        <div className="prose text-gray-600">
          <p className="mb-4">
            At MovieHouse, we take your privacy seriously. This Privacy Policy
            explains how we collect, use, and protect your personal information.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 my-3">
            Information We Collect
          </h3>
          <p className="mb-4">
            We collect information you provide directly to us, such as when you
            create an account, subscribe to our newsletter, or contact us for
            support.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 my-3">
            How We Use Your Information
          </h3>
          <p className="mb-4">
            We use your information to provide and improve our services,
            communicate with you, and ensure a personalized experience.
          </p>
        </div>
      </div>
    ),
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
          Help - {section.charAt(0).toUpperCase() + section.slice(1)}
        </h1>
        <div className="flex space-x-2 text-sm">
          <Link href="/help" className="text-red-600 hover:text-red-700">
            Help Center
          </Link>
          <span className="text-gray-400">›</span>
          <span className="text-gray-600 dark:text-white">
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </span>
        </div>
      </div>

      {contentMap[section] || (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-red-600 text-lg mb-4">
            Sorry, this section does not exist.
          </p>
          <Link
            href="/help"
            className="text-red-600 hover:text-red-700 font-medium"
          >
            Back to Help Center
          </Link>
        </div>
      )}
    </div>
  );
}
