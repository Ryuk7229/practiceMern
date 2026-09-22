
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <h1 className="text-2xl font-bold">
          MyApp
        </h1>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="hover:text-blue-400 transition"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="hover:text-blue-400 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/login"
            className="hover:text-blue-400 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Signup
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
