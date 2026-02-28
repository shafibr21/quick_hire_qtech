import mongoose, { Schema, Document, Model } from "mongoose";

export interface IJob extends Document {
  title: string;
  company: string;
  location: string;
  category: string;
  salary: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const JobSchema: Schema<IJob> = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    company: {
      type: String,
      required: [true, "Company is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    salary: {
      type: String,
      required: [true, "Salary is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  },
);

// Mongoose model re-use pattern for Next.js serverless functions
const Job: Model<IJob> =
  mongoose.models.Job || mongoose.model<IJob>("Job", JobSchema);

export default Job;
