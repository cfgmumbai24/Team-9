import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import connectDB from "./lib/db.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.js";
import courseRoutes from "./routes/course.js";
import bodyParser from "body-parser";
import questionRoutes from "./routes/questions.js";

import jobRoutes from "./routes/jobs.js";

import { initEdgeStore } from "@edgestore/server";
import { createEdgeStoreExpressHandler } from "@edgestore/server/adapters/express";
import { z } from "zod";
import { seedVideos } from "./seeders/video.js";
// import { generateUsers } from "./seeders/user.js";
// import { generateQuestions } from "./seeders/question.js";

import chatRoutes from "./routes/chat.js";
import { seedJobs } from "./seeders/jobs.js";

dotenv.config();
const app = express();
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

const es = initEdgeStore.create();
const edgeStoreRouter = es.router({
  publicFiles: es
    .fileBucket()
    .input(
      z.object({
        category: z.string(),
      })
    )
    .beforeUpload(({ ctx, input, fileInfo }) => {
      console.log("beforeUpload", ctx, input, fileInfo);
      return true; // allow upload
    })
    /**
     * return `true` to allow delete
     * This function must be defined if you want to delete files directly from the client.
     */
    .beforeDelete(({ ctx, fileInfo }) => {
      console.log("beforeDelete", ctx, fileInfo);
      return true; // allow delete
    }),
  publicImages: es
    .imageBucket()
    .input(
      z.object({
        category: z.string(),
      })
    )
    .beforeUpload(({ ctx, input, fileInfo }) => {
      console.log("beforeUpload", ctx, input, fileInfo);
      return true; // allow upload
    })
    /**
     * return `true` to allow delete
     * This function must be defined if you want to delete files directly from the client.
     */
    .beforeDelete(({ ctx, fileInfo }) => {
      console.log("beforeDelete", ctx, fileInfo);
      return true; // allow delete
    }),
});

const getUserSession = async (req) => {
  return {
    id: "1",
    role: "admin",
  };
};

async function createContext({ req }) {
  const { id, role } = await getUserSession(req); // replace with your own session logic

  return {
    userId: id,
    userRole: role,
  };
}

const handler = createEdgeStoreExpressHandler({
  router: edgeStoreRouter,
  createContext,
});

connectDB();

// generateQuestions();
// generateUsers(10);
// seedVideos(5);
// seedJobs(5);

app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/chats", chatRoutes);

app.use("/api/jobs", jobRoutes);

app.use("/api/questions", questionRoutes);

app.get("/edgestore/*", handler);
app.post("/edgestore/*", handler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
