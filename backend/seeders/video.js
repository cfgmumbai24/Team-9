import Course, { Video } from "../models/Course.js";

import { faker } from "@faker-js/faker";

export const seedVideos = async (numVideosPerCourse) => {
  try {
    await Video.deleteMany({});

    // Fetch all courses
    const courses = await Course.find();

    if (courses.length === 0) {
      throw new Error("No courses found. Please seed courses first.");
    }

    for (const course of courses) {
      const videos = [];

      for (let i = 0; i < numVideosPerCourse; i++) {
        const video = new Video({
          title: faker.lorem.sentence(),
          videoUrl: faker.internet.url(),
        });

        await video.save();
        videos.push(video._id); // Push the video id to the videos array
      }

      // Update the course with the videos
      course.videos = videos;
      await course.save();
    }

    console.log(`Added ${numVideosPerCourse} videos to each course.`);
  } catch (error) {
    console.error("Error seeding videos:", error);
  }
};
