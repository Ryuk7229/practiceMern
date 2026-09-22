
import { Link } from "react-router-dom";

function Signup() {
  return (
    <section className="min-h-[90vh] bg-blue-50 flex items-center justify-center px-5">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-center text-slate-900">
          Create Account
        </h1>

        <p className="text-gray-500 text-center mt-2 mb-8">
          Join us today
        </p>

        <form>

          <div className="mb-5">
            <label className="block font-medium mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-5">
            <label className="block font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}

          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </section>
  );
}

export default Signup;

