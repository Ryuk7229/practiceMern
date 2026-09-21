import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import './index.css'

import useFetch from "./useFetch";

function App() {
  const {
    data,
    loading,
    error
  } = useFetch("https://jsonplaceholder.typicode.com/photos?_limit=8");

  // Different colors for the boxes
  const colors = [
    "bg-lime-400",
    "bg-purple-700",
    "bg-green-400",
    "bg-pink-600",
    "bg-pink-500",
    "bg-blue-600",
    "bg-green-200",
    "bg-purple-900"
  ];

  if (loading) {
    return (
      <div className="bg-black min-h-screen text-white flex items-center justify-center">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black min-h-screen text-red-500 flex items-center justify-center">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen py-2 px-4">

      <h1 className="text-white text-center text-xl font-bold mb-2">
        Photos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">

        {data.map((photo, index) => (
          <div
            key={photo.id}
            className="border border-gray-500 h-40 p-2"
          >

            <div className="flex flex-col items-center">

              {/* Color Box */}
              <div
                className={`w-28 h-28 ${colors[index]} flex items-center justify-center`}
              >
                <span className="text-gray-400 text-xs">
                  600 x 600
                </span>
              </div>

              {/* API title */}
              <p className="text-white text-[10px] text-center mt-2 truncate w-full">
                {photo.title}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default App;