import { NextRequest } from "next/server";
import connectToDatabase from "@/lib/db";
import Job from "@/lib/models/Job";
import { jobSchema } from "@/lib/validators/jobValidator";
import { apiResponse } from "@/lib/utils/apiResponse";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { z } from "zod";

export async function GET() {
  try {
    await connectToDatabase();

    // Return all jobs sorted by newest first
    const jobs = await Job.find().sort({ createdAt: -1 });

    return apiResponse(200, true, jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return apiResponse(500, false, undefined, "Internal server error");
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const formData = await req.formData();

    // Extract text fields
    const body = {
      title: formData.get("title") as string,
      company: formData.get("company") as string,
      location: formData.get("location") as string,
      category: formData.get("category") as string,
      salary: formData.get("salary") as string,
      description: formData.get("description") as string,
    };

    // Validate text fields
    const validatedData = jobSchema.parse(body);

    // Handle optional icon upload
    let iconUrl: string | undefined;
    const iconFile = formData.get("icon") as File | null;
    if (iconFile && iconFile.size > 0) {
      console.log(
        "[jobs/route] Uploading icon:",
        iconFile.name,
        iconFile.size,
        "bytes",
      );
      try {
        const arrayBuffer = await iconFile.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        iconUrl = await uploadToCloudinary(buffer);
        console.log("[jobs/route] Cloudinary URL:", iconUrl);
      } catch (uploadError) {
        console.error("[jobs/route] Cloudinary upload failed:", uploadError);
        return apiResponse(
          500,
          false,
          undefined,
          "Image upload failed. Please try again.",
        );
      }
    }

    // Create new job
    const newJob = await Job.create({ ...validatedData, iconUrl });

    return apiResponse(201, true, newJob, "Job created successfully");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return apiResponse(
        400,
        false,
        undefined,
        "Validation failed",
        error.issues,
      );
    }

    console.error("Error creating job:", error);
    return apiResponse(500, false, undefined, "Internal server error");
  }
}
