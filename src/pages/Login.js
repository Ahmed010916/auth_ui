import { useEffect, useRef } from "react";
import logo from "./../assets/Logo.png";
import google from "./../assets/google.svg";
import facebook from "./../assets/facebook.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "./../features/auth/UserActionThunk";

const Login = () => {
  const { message, loading, loggedin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  const LoginUserHandle = (event) => {
    event.preventDefault();
    dispatch(
      LoginUser({
        email: email.current.value,
        password: password.current.value,
      })
    );
  };

  useEffect(() => {
    if (loggedin === true) {
      return navigate("/");
    }
  }, [loggedin]);

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-[10%]">
      <div className="flex flex-col gap-3 items-center">
        <img src={logo} alt="logo" className="w-16" />
        <p className="text-xl font-medium text-gray-700 mb-4">
          Sign in to Flower App
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="border flex py-3 px-3 w-52 rounded-lg cursor-pointer">
            <img src={google} alt="google-icon" className=" pr-2" />
            <p>Sign in with google</p>
          </div>
          <div className="border flex py-3 px-3 w-52 rounded-lg cursor-pointer">
            <img src={facebook} alt="facebook-icon" className="pr-2" />
            <p>Sign in with facebook</p>
          </div>
        </div>
        <p className="text-md mt-2">Or</p>
        <p className="text-red-600">{message}</p>
        <div className="">
          <form onSubmit={LoginUserHandle} className="flex flex-col">
            <label className="mb-1 text-gray-800">Email</label>
            <input
              ref={email}
              type="email"
              placeholder="email"
              className="w-[70vw] sm:w-[50vw] border border-purple-800  rounded-md py-2 px-4 mb-3"
            />

            <label className="mb-1 text-gray-800">Password</label>
            <input
              ref={password}
              type="password"
              placeholder="password"
              className="w-[70vw] sm:w-[50vw] border border-purple-800 rounded-md py-2 px-4"
            />

            <button
              type="submit"
              disabled={loading}
              className="disabled:bg-gray-600 mt-5 rounded-md py-2 text-md text-white px-5 bg-purple-500 hover:bg-purple-800 w-[70vw] sm:w-[50vw]"
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="flex gap-3">
          <Link to="/forgot-password" className="hover:text-purple-500">
            forgot you password?
          </Link>{" "}
          <Link to="/register" className="hover:text-purple-500">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
