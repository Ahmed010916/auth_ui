import React from 'react'
import logo from "./../assets/Logo.png";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-[5%]">
      <div className="flex flex-col gap-3 items-center">
        <img src={logo} alt="logo" className="w-16" />
        <p className="text-xl font-medium text-gray-700 mb-4">
          Recovery Account Flower App 
        </p>
        <div className="">
          <form className="flex flex-col">
           
            <label className="mb-1 text-gray-800">Email</label>
            <input
              type="email"
              placeholder="email"
              className="w-[70vw] sm:w-[50vw] border border-purple-800  rounded-md py-2 px-4 mb-3"
            />

            <button
              type="submit"
              className="mt-5 rounded-md py-2 text-md text-white px-5 bg-purple-500 hover:bg-purple-800 w-[70vw] sm:w-[50vw]"
            >
              Send
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

export default ForgotPassword