import User from "../models/User.js";
import { faker } from "@faker-js/faker";
import bcrypt from "bcryptjs";

export const generateUsers = async (numUsers) => {
  try {
    // Clear existing users
    await User.deleteMany({});

    // Generate users
    for (let i = 0; i < numUsers; i++) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash("password", salt); // Default password is 'password'

      const user = new User({
        name: faker.name.fullName(),
        email: faker.internet.email(),
        password: hashedPassword,
        role: faker.helpers.arrayElement(["student", "mentor", "admin"]),
        avatar: faker.image.avatar(),
        district: faker.address.city(),
        languages: faker.helpers.arrayElements(
          ["English", "Spanish", "French", "German", "Chinese"],
          faker.datatype.number({ min: 1, max: 3 })
        ),
        mentorInformation: {
          speciality: faker.lorem.word(),
          qualification: faker.lorem.words(2),
          approval: faker.datatype.boolean(),
        },
        answers: [],
      });

      await user.save();
    }

    console.log(
      `${numUsers} users have been successfully generated and saved to the database.`
    );
  } catch (error) {
    console.error("Error generating users:", error);
  }
};
