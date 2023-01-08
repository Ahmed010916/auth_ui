import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const Nav = () => {
  return (
    <div className="shadow-sm">
      <div className="py-3 px-5 flex justify-between text-gray-700 container">
        <Link
          to="/"
          className="text-xl font-medium transition-colors hover:text-black "
        >
          Home
        </Link>
        <div className="flex gap-3">
          {auth.currentUser === null ? (
            <div className="flex gap-5">
              <Link
                to="/login"
                className="text-lg font-medium transition-colors hover:text-purple-500"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-lg font-medium transition-colors hover:text-purple-500"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="flex gap-5">
              <p>Hi : {auth.currentUser.email}</p>
              <Link
                to="/logout"
                className="text-lg font-medium transition-colors hover:text-purple-500"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
