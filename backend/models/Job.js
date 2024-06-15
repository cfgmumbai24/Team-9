import mongoose from "mongoose";

const { Schema } = mongoose;

const jobSchema = new Schema({
  title: String,
  description: String,
  location: String,

  employees: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  type: [String],
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
