import { z } from "zod";

export const jobSchema = z.object({
  title: z
    .string({
      error: "Title is required",
    })
    .min(1, "Title cannot be empty"),
  company: z
    .string({
      error: "Company is required",
    })
    .min(1, "Company cannot be empty"),
  location: z
    .string({
      error: "Location is required",
    })
    .min(1, "Location cannot be empty"),
  category: z
    .string({
      error: "Category is required",
    })
    .min(1, "Category cannot be empty"),
  salary: z
    .string({
      error: "Salary is required",
    })
    .min(1, "Salary cannot be empty"),
  description: z
    .string({
      error: "Description is required",
    })
    .min(10, "Description must be at least 10 characters long"),
});
