import { Navigate } from "react-router-dom";
import { auth } from "./firebase";

export default function ProdectedRouter({ children }) {
  if (auth.currentUser === null) {
    return { children };
  } else {
    return <Navigate to="/" />;
  }
}