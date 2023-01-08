import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export default function ProdectedRouter({ children }) {
  // getIdToken("dmS4SRot9NXmljePNdydzkOZj8J2").then((user) => {
  //   console.log(user);
  // });
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.uid);
    } else {
      console.log("A");
    }
  });

  console.log(auth);

  return children;
}
