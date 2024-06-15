import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { userId, setUserId } = useContext(UserContext);
  console.log(userId, setUserId);

  return <div>Home</div>;
};

export default Home;
