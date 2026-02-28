import { z } from "zod";
import mongoose from "mongoose";

export const applicationSchema = z.object({
  job_id: z
    .string({
      error: "Job ID is required",
    })
    .refine((val) => mongoose.Types.ObjectId.isValid(val), {
      message: "Invalid Job ID format",
    }),
  name: z
    .string({
      error: "Name is required",
    })
    .min(1, "Name cannot be empty"),
  email: z
    .string({
      error: "Email is required",
    })
    .email("Invalid email format"),
  resume_link: z
    .string({
      error: "Resume link is required",
    })
    .url("Invalid URL format"),
  cover_note: z
    .string({
      error: "Cover note is required",
    })
    .min(10, "Cover note must be at least 10 characters long"),
});
