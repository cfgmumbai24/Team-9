import Questions from "../models/Questions.js";
import { faker } from "@faker-js/faker";

export const generateQuestions = async () => {
  try {
    // Clear existing questions
    await Questions.deleteMany({});

    // Generate 10 questions
    for (let i = 0; i < 10; i++) {
      const question = new Questions({
        question: faker.lorem.sentence(),
        options: [
          faker.lorem.word(),
          faker.lorem.word(),
          faker.lorem.word(),
          faker.lorem.word(),
        ],
      });

      await question.save();
    }

    console.log(
      "10 questions have been successfully generated and saved to the database."
    );
  } catch (error) {
    console.error("Error generating questions:", error);
  }
};
