import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "flowbite-react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = videojs(videoRef.current, {
      controls: true,
      preload: "auto",
      fluid: true,
    });

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []);

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        className="video-js vjs-big-play-centered"
        controls
        preload="auto"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

const CourseDataDesc = ({ courseData }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <img
          src={courseData.image}
          alt={courseData.title}
          className="w-full h-auto rounded"
        />
        <h1 className="text-4xl font-bold text-gray-900 mt-6">
          {courseData.title}
        </h1>
        <p className="text-xl text-gray-700 mt-4">{courseData.description}</p>
        <p className="text-2xl font-bold text-gray-900 mt-4">
          ${courseData.price}
        </p>
        <Button size="lg" className="mt-6">
          Enroll Now
        </Button>
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Course Content
          </h2>
          <ul className="space-y-4">
            {courseData.videos.map((video) => (
              <li key={video._id} className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {video.title}
                </h3>
                <VideoPlayer videoUrl={video.videoUrl} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Course = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/courses/${id}`)
      .then((response) => response.json())
      .then((data) => setCourse(data))
      .catch((error) => console.error("Error fetching course:", error));
  }, [id]);

  console.log(course);

  if (!course) {
    return <div>Loading...</div>;
  }

  return <CourseDataDesc courseData={course} />;
};

export default Course;
