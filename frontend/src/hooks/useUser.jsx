import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const useUser = () => {
  const userctx = useContext(UserContext);
  const { userId } = userctx;
  const [user, setUser] = useState(null);

  console.log(user);

  const backendURI = import.meta.env.VITE_BACKEND_URI;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${backendURI}/api/users/${userId}`);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (userId) fetchUser();
  }, [userId, backendURI]);

  return user;
};

export default useUser;
