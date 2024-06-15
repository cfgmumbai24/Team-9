import { useEffect, useState } from "react";
import axios from "axios";
import CustomTable from "../components/customUI/Table";
import HeaderCarousel from "../components/customUI/Header";

const tableMetadata = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Description",
    accessor: "description",
  },
  {
    header: "Location",
    accessor: "location",
  },
  {
    header: "Employees",
    accessor: "employees",
  },
  {
    header: "Type",
    accessor: "type",
  },
];

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const backendURI = import.meta.env.VITE_BACKEND_URI;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${backendURI}/api/jobs`);

        setJobs(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobs();
  }, [backendURI]);

  return (
    <div>
      {/* <HeaderCarousel
        descriptionText={"Discover various job opportunities available"}
        headerText={"Jobs"}
      /> */}

      <CustomTable
        columns={tableMetadata}
        data={jobs?.map((job) => ({
          ...job,
          employees: job?.employees?.map((emp) => emp.name).join(", "),
        }))}
      />
    </div>
  );
};

export default Jobs;
