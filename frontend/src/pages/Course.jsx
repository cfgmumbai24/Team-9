import { useParams } from "react-router-dom";
const Course = () => {
  const { id } = useParams();

  return <div>Course {id}</div>;
};

export default Course;
