import express from "express";
import User from "../models/User";

const router = express.Router();

router.get("/getmentors", async (req, res) => {
  const users = await User.find({});
  return res.status(200).json(users);
});

export default router;
