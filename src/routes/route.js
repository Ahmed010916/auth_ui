import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import P404 from "../pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    errorElement: <P404 />,
    element: <Login />,
  },
  {
    path: "/register",
    errorElement: <P404 />,
    element: <Register />,
  },
  {
    path: "/forgot-password",
    errorElement: <P404 />,
    element: <ForgotPassword />,
  },
  {
    path: "*",
    element: <P404 />,
  },
]);

export default router;
