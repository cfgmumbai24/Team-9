import Course from "../models/Course.js";
import User from "../models/User.js";

export const getCourses = async (req, res) => {
  try {
    const { userId } = req.query;

    // convert it to a mongoose compatible object id

    const uid = JSON.parse(JSON.stringify(userId));

    const user = await User.findById(uid);

    console.log("user", user);

    const interests = user.interests;

    console.log("userId", userId);
    console.log("interests", interests);

    const courses = await Course.find({}).populate("videos");
    const finalCourses = [];

    // all the course s that contain any of the interests

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
