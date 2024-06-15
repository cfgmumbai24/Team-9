import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: process.env.USER_ROLE,
  },
  avatar: {
    type: String,
  },
  district: {
    type: String,
  },
  languages: [String],

  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],

  coursesTaught: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
