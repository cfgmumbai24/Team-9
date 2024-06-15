import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  addMentorInfo,
  approveMentorInfo,
} from "../controllers/user.js";
import {
  protect,
  protectMentor,
  protectAdmin,
} from "../middleware/authMiddleware.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  console.log(id);

  const user = await User.findById(id);

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile").get(protect, getUserProfile);
router.route("/addMentorInfo").post(protect, protectMentor, addMentorInfo);
router.route("/approveMentor").post(protect, protectAdmin, approveMentorInfo);

export default router;
