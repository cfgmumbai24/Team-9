import Course from "../models/Course.js";

export const getCourses = async (req, res) => {
  try {
    const interests = ["programming", "AI", "advanced"];

    const courses = await Course.find({}).populate("videos");
    const finalCourses = [];

    // all the courses that contain any of the interests

    let fg = false;

    for (let course of courses) {
      for (let interest of interests) {
        for (let tag of course.tags) {
          if (tag === interest) {
            fg = true;
            break;
          }
        }
      }

      if (fg) {
        finalCourses.push(course);
      }
    }

    console.log("finalCourses", finalCourses);

    res.status(200).json(finalCourses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

export const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;

    const course = await Course.findById(id).populate("videos");

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json(course);
  } catch (error) {
    console.error("Error fetching course by id:", error);
    throw error;
  }
};
