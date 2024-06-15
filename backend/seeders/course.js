import mongoose from "mongoose";
import Course from "../models/Course.js"; // Adjust the path as needed
import { faker } from "@faker-js/faker";

const generateCourses = (num) => {
  const courses = [];
  for (let i = 0; i < num; i++) {
    courses.push({
      title: faker.lorem.words(3),
      description: faker.lorem.sentences(5),
      price: faker.commerce.price(50, 300, 2),
      image: faker.image.imageUrl(),
      instructor: null, // Placeholder for ObjectId reference to a User
      enrolled: [], // Placeholder for ObjectId references to Users
      videos: [], // Placeholder for ObjectId references to Videos
      tags: faker.helpers.arrayElements([
        "programming",
        "beginner",
        "advanced",
        "javascript",
        "python",
        "AI",
        "ML",
        "web development",
      ]),
    });
  }
  return courses;
};

// Seed data
const seedCourses = generateCourses(10); // Generate 10 random courses

const seedDBForCourses = async () => {
  try {
    await Course.deleteMany({}); // Clear existing data
    await Course.insertMany(seedCourses); // Insert seed data
    console.log("Database seeded successfully");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    mongoose.connection.close(); // Close the connection
  }
};

export default seedDBForCourses;
