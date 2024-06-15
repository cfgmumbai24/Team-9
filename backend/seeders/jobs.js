import Job from "../models/Job.js";
import { faker } from "@faker-js/faker";

export const seedJobs = async (numJobs = 50) => {
  try {
    // Clear the existing jobs
    await Job.deleteMany();

    const jobs = [];
    for (let i = 0; i < numJobs; i++) {
      jobs.push({
        title: faker.name.jobTitle(),
        description: faker.lorem.paragraph(),
        location: faker.address.city(),
        employees: [], // Ignoring references
        type: faker.helpers.arrayElement([
          "Full-Time",
          "Part-Time",
          "Contract",
        ]),
      });
    }

    await Job.insertMany(jobs);

    console.log(`Successfully seeded ${numJobs} jobs`);
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
