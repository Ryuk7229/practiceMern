
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-[90vh] bg-blue-50 flex items-center">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-blue-600 font-semibold mb-3">
          WELCOME TO MYAPP
        </p>

        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          Simple React Router Project
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          This is a simple React application that uses
          React Router DOM to navigate between different pages.
        </p>

        <div className="flex justify-center gap-4">

          <Link
            to="/dashboard"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Dashboard
          </Link>

          <Link
            to="/signup"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white"
          >
            Create Account
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Home;
