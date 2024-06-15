import express from "express";
import asyncHandler from "express-async-handler";
import Chat from "../models/Chat.js";
import User from "../models/User.js";

const router = express.Router();

// Fetch or create a chat between a user and a mentor
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { userId, mentorId } = req.body;
    let chat = await Chat.findOne({ user: userId, mentor: mentorId }).populate(
      "user mentor messages.sender"
    );

    if (!chat) {
      chat = new Chat({
        user: userId,
        mentor: mentorId,
        messages: [],
      });
      await chat.save();
    }

    res.json(chat);
  })
);

// Send a message
router.post(
  "/:chatId/messages",
  asyncHandler(async (req, res) => {
    const { chatId } = req.params;
    const { senderId, content } = req.body;

    const chat = await Chat.findById(chatId);

    if (chat) {
      const newMessage = { sender: senderId, content };
      chat.messages.push(newMessage);
      await chat.save();

      res.json(newMessage);
    } else {
      res.status(404).json({ message: "Chat not found" });
    }
  })
);

// Get messages for a chat
router.get(
  "/:chatId/messages",
  asyncHandler(async (req, res) => {
    const { chatId } = req.params;

    const chat = await Chat.findById(chatId).populate("messages.sender");

    if (chat) {
      res.json(chat.messages);
    } else {
      res.status(404).json({ message: "Chat not found" });
    }
  })
);

export default router;
