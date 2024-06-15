import { useEffect, useState } from "react";
import axios from "axios";
import CustomTable from "../components/customUI/Table";

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

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${backendURI}/api/courses`);
        console.log(res.data);

        setCourses(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <CustomTable
        columns={tableMetadata}
        data={courses?.map((course) => ({
          ...course,
          enrolled: course.enrolled.length,
          tags: course.tags.join(", "),
        }))}
      />
    </div>
  );
};

export default Courses;
