import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./lib/db.js";
import courseRoutes from "./routes/course.js";
// import seedDBForCourses from "./seeders/course.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

// seedDBForCourses();

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.use("/api/courses", courseRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
