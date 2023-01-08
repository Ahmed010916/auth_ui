import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import P404 from "./pages/404";
import ProdectedRouter from "./ProdectedRouter";
import { auth } from "./firebase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    errorElement: <P404 />,
    element: (
      <ProdectedRouter>
        <Login />
      </ProdectedRouter>
    ),
  },
  {
    path: "/register",
    errorElement: <P404 />,
    element: (
      <ProdectedRouter>
        <Register />
      </ProdectedRouter>
    ),
  },
  {
    path: "/logout",
    errorElement: <P404 />,
    element: auth.signOut(auth).then(() => {
      return <Navigate to="/" replace="true" />;
    }),
  },
  {
    path: "/forgot-password",
    errorElement: <P404 />,
    element: (
      <ProdectedRouter>
        <ForgotPassword />
      </ProdectedRouter>
    ),
  },
  {
    path: "*",
    element: <P404 />,
  },
]);

export default router;
