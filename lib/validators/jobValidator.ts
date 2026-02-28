import { z } from "zod";

export const jobSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
    })
    .min(1, "Title cannot be empty"),
  company: z
    .string({
      required_error: "Company is required",
    })
    .min(1, "Company cannot be empty"),
  location: z
    .string({
      required_error: "Location is required",
    })
    .min(1, "Location cannot be empty"),
  category: z
    .string({
      required_error: "Category is required",
    })
    .min(1, "Category cannot be empty"),
  salary: z
    .string({
      required_error: "Salary is required",
    })
    .min(1, "Salary cannot be empty"),
  description: z
    .string({
      required_error: "Description is required",
    })
    .min(10, "Description must be at least 10 characters long"),
});
