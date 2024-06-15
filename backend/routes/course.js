import express from "express";
import { getCourses } from "../controllers/course.js";
import Course from "../models/Course.js";

const router = express.Router();

router.get("/", getCourses);

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const course = await Course.findById(id).populate("videos");
  return res.status(200).json(course);
});

export default router;
