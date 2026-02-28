import { NextRequest } from "next/server";
import mongoose from "mongoose";
import connectToDatabase from "@/lib/db";
import Job from "@/lib/models/Job";
import Application from "@/lib/models/Application";
import { apiResponse } from "@/lib/utils/apiResponse";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return apiResponse(400, false, undefined, "Invalid Job ID format");
    }

    await connectToDatabase();

    const job = await Job.findById(id);

    if (!job) {
      return apiResponse(404, false, undefined, "Job not found");
    }

    return apiResponse(200, true, job);
  } catch (error) {
    console.error("Error fetching job:", error);
    return apiResponse(500, false, undefined, "Internal server error");
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return apiResponse(400, false, undefined, "Invalid Job ID format");
    }

    await connectToDatabase();

    // Cascading delete
    // First find if job exists
    const job = await Job.findById(id);
    if (!job) {
      return apiResponse(404, false, undefined, "Job not found");
    }

    // Delete related applications
    await Application.deleteMany({ job_id: id });

    // Delete the job
    await Job.findByIdAndDelete(id);

    return apiResponse(
      200,
      true,
      undefined,
      "Job and related applications deleted successfully",
    );
  } catch (error) {
    console.error("Error deleting job:", error);
    return apiResponse(500, false, undefined, "Internal server error");
  }
}
