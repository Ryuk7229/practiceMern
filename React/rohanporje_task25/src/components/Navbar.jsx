import React from 'react'

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-3 py-3 flex items-center">

        <h1 className="text-1xl font-medium text-black mr-25">
          ShoeStore
        </h1>

        <div className="flex gap-10">
          <a href="#" className="text-gray-900 font-medium hover:text-blue-600">
            Home
          </a>

          <a href="#" className="text-gray-600 hover:text-blue-600">
            Categories
          </a>

          <a href="#" className="text-gray-600 hover:text-blue-600">
            About Us
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar