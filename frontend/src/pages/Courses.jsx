import { useContext, useEffect, useState } from "react";
import axios from "axios";
import CustomTable from "../components/customUI/Table";
import { generateImageUrls } from "../utils";
import HeaderCarousel from "../components/customUI/Header";
import { UserContext } from "../context/UserContext";

const tableMetadata = [
  {
    header: "Name",
    accessor: "title",
  },
  {
    header: "Description",
    accessor: "description",
  },
  {
    header: "Price",
    accessor: "price",
  },
  {
    header: "enrolled",
    accessor: "enrolled",
  },

  {
    header: "tags",
    accessor: "tags",
  },
];

const Courses = () => {
  const [courses, setCourses] = useState([]);

  const backendURI = import.meta.env.VITE_BACKEND_URI;
  const dummyImages = generateImageUrls(5);

  const userctx = useContext(UserContext);
  const { userId } = userctx;

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(
          `${backendURI}/api/courses?userId=${userId}`
        );
        console.log(res.data);

        setCourses(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourses();
  }, [userId, backendURI]);

  return (
    <div>
      <div className="mb-6">
        <HeaderCarousel
          descriptionText={
            "The user can get an overview of the career opportunities available in the market."
          }
          headerText={"Courses"}
          images={dummyImages}
        />
      </div>

      <div className="px-8">
        <CustomTable
          columns={tableMetadata}
          data={courses?.map((course) => ({
            ...course,
            enrolled: course.enrolled.length,
            tags: course.tags.join(", "),
          }))}
        />
      </div>
    </div>
  );
};

export default Courses;
