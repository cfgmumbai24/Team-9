// routes/questions.js
import express from "express";
import Questions from "../models/Questions.js";
import User from "../models/User.js";

const router = express.Router();

// Get all questions
router.get("/", async (req, res) => {
  try {
    const questions = await Questions.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single question
router.get("/:id", async (req, res) => {
  try {
    const question = await Questions.findById(req.params.id);
    if (!question)
      return res.status(404).json({ message: "Question not found" });
    res.json(question);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Submit an answer
router.post("/answer", async (req, res) => {
  const { userId, questionId, answer } = req.body;

  try {
    console.log(req.body);
    const user = await User.findById(userId);
    user.answers.push({ questionId, answer });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
