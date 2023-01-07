import React from 'react'
import logo from "./../assets/Logo.png";
import google from "./../assets/google.svg";
import facebook from "./../assets/facebook.svg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-[5%]">
      <div className="flex flex-col gap-3 items-center">
        <img src={logo} alt="logo" className="w-16" />
        <p className="text-xl font-medium text-gray-700 mb-4">
          Sign Up to Flower App
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="border flex py-3 px-3 w-56 rounded-lg cursor-pointer text-center">
            <img src={google} alt="google-icon" className="pr-3" />
            <p>Sign Up with google</p>
          </div>
          <div className="border flex py-3 px-3 w-56 rounded-lg cursor-pointer text-center">
            <img src={facebook} alt="facebook-icon" className="pr-3" />
            <p>Sign Up with facebook</p>
          </div>
        </div>
        <p className="text-md mt-2">Or</p>
        <div className="">
          <form className="flex flex-col">
            <label className="mb-1 text-gray-800">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-[70vw] sm:w-[40vw] border border-purple-800  rounded-md py-2 px-4 mb-3"
            />

            <label className="mb-1 text-gray-800">Email</label>
            <input
              type="email"
              placeholder="email"
              className="w-[70vw] sm:w-[40vw] border border-purple-800  rounded-md py-2 px-4 mb-3"
            />

            <label className="mb-1 text-gray-800">Password</label>
            <input
              type="password"
              placeholder="password"
              className="w-[70vw] sm:w-[40vw] border border-purple-800 rounded-md py-2 px-4  mb-3"
            />

            <label className="mb-1 text-gray-800">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-[70vw] sm:w-[40vw] border border-purple-800 rounded-md py-2 px-4"
            />

            <button
              type="submit"
              className="mt-5 rounded-md py-2 text-md text-white px-5 bg-purple-500 hover:bg-purple-800 w-[70vw] sm:w-[40vw]"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex gap-3 pb-5">
          <p className="">
            You Have account!
          </p>{" "}
          <Link to="/login" className="hover:text-purple-500">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register