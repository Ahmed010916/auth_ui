import React from 'react'
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div className="shadow-md">
      <p className="py-3 px-5 flex justify-between text-gray-700 container">
        <Link to="/" className="text-xl font-medium transition-colors hover:text-black ">Home</Link>
        <div className="flex gap-3">
          <Link to="/login"    className="text-lg font-medium transition-colors hover:text-purple-500">Login</Link>
          <Link to="/register" className="text-lg font-medium transition-colors hover:text-purple-500">Register</Link>
        </div>
      </p>
    </div>
  )
}

export default Nav