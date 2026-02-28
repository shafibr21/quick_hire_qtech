import "server-only";
import mongoose from "mongoose";
import connectToDatabase from "./db";
import JobModel from "./models/Job";
import { Job } from "./types";

// Mongoose returns _id/createdAt, but our frontend types use id/created_at
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformJob(doc: any): Job {
  return {
    id: doc._id?.toString?.() || doc.id,
    title: doc.title,
    company: doc.company,
    location: doc.location,
    category: doc.category,
    salary: doc.salary || "",
    description: doc.description,
    created_at: doc.createdAt || doc.created_at,
  };
}

export async function getJobs(): Promise<Job[]> {
  await connectToDatabase();
  const jobs = await JobModel.find().sort({ createdAt: -1 }).lean();
  return jobs.map(transformJob);
}

export async function getJobById(id: string): Promise<Job | null> {
  if (!mongoose.Types.ObjectId.isValid(id)) return null;

  await connectToDatabase();
  const job = await JobModel.findById(id).lean();

  return job ? transformJob(job) : null;
}
