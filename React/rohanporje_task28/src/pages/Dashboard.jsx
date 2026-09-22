
function Dashboard() {
  return (
    <section className="min-h-[90vh] bg-gray-100 p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-slate-900 mb-2">
          Dashboard
        </h1>

        <p className="text-gray-500 mb-8">
          Welcome back! Here is your dashboard.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-500">
              Total Users
            </p>

            <h2 className="text-3xl font-bold text-blue-600 mt-2">
              1,250
            </h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-500">
              Projects
            </p>

            <h2 className="text-3xl font-bold text-green-600 mt-2">
              48
            </h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-500">
              Messages
            </p>

            <h2 className="text-3xl font-bold text-purple-600 mt-2">
              320
            </h2>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Dashboard;
