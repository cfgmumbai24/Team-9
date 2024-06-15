import express from "express";
import Job from "../models/Job.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const jobs = await Job.find({}).populate("employees");
  res.json(jobs);
});

export default router;
