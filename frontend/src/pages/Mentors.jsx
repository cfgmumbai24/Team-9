import { useContext, useEffect, useState } from "react";
import axios from "axios";
import CustomTable from "../components/customUI/Table";
import HeaderCarousel from "../components/customUI/Header";
import { generateImageUrls } from "../utils";
import { UserContext } from "../context/UserContext";
import MentorSpace from "../components/MentorSpace";
import useUser from "../hooks/useUser";

const tableMetadata = [
  {
    header: "Name",
    accessor: "name",
  },
  {
    header: "Email",
    accessor: "email",
  },
  {
    header: "Role",
    accessor: "role",
  },
  {
    header: "District",
    accessor: "district",
  },
  {
    header: "Interests",
    accessor: "interests",
  },
];

const Mentors = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const backendURI = import.meta.env.VITE_BACKEND_URI;

  const { userId } = useContext(UserContext);
  console.log(userId);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (userId) {
          const res = await axios.get(`${backendURI}/api/users`);
          setUsers(res.data);
          const userRes = await axios.get(`${backendURI}/api/users/${userId}`);
          console.log(userRes.data);
          setUser(userRes.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, [userId, backendURI]);

  const dummyImages = generateImageUrls(3);

  return (
    <div>
      <HeaderCarousel
        descriptionText={"Find users and their interests"}
        headerText={"Users"}
        images={dummyImages}
      />

      <CustomTable
        columns={tableMetadata}
        data={users?.map((user) => ({
          ...user,
          interests: user.interests.join(", "),
        }))}
        base="mentors"
      />

      {user?.mentor ? (
        <MentorSpace />
      ) : (
        <p>
          You are not assigned a mentor yet. Please wait for the admin to assign
          you a mentor.
        </p>
      )}
    </div>
  );
};

export default Mentors;
