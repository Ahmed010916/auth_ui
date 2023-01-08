import { onAuthStateChanged } from "firebase/auth";
import { ref } from "firebase/database";
import { auth } from "./firebase";

export default function ProdectedRouter({ children }) {
  // getIdToken("dmS4SRot9NXmljePNdydzkOZj8J2").then((user) => {
  //   console.log(user);
  // });
  return children;
}
