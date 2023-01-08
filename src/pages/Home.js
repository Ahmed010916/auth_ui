import Nav from "../components/Nav";
import { auth } from "../firebase";

const Home = () => {
  const user = auth;
  console.log(user);

  return (
    <div className="">
      <Nav />
    </div>
  );
};

export default Home;
