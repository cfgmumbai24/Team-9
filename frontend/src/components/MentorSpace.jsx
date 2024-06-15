import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import Chat from "./Chat";

const MentorSpace = () => {
  const [user, setUser] = useState(null);
  const backendURI = import.meta.env.VITE_BACKEND_URI;
  const { userId } = useContext(UserContext);

  console.log(user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${backendURI}/api/users/${userId}`);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [userId, backendURI]);

  return (
    <div>{userId && user?.mentor && <Chat mentorId={user?.mentor?._id} />}</div>
  );
};

export default MentorSpace;
