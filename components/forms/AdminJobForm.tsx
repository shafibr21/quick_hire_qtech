"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";
import { Select } from "../ui/Select";
import { createJob } from "@/lib/api";

const jobSchema = z.object({
  title: z.string().min(3, "Title is required"),
  company: z.string().min(2, "Company is required"),
  location: z.string().min(2, "Location is required"),
  category: z.string().min(2, "Category is required"),
  salary: z.string().min(2, "Salary is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

type JobFormValues = z.infer<typeof jobSchema>;

export function AdminJobForm({ onSuccess }: { onSuccess?: () => void }) {
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<JobFormValues>({
    resolver: zodResolver(jobSchema),
  });

  const onSubmit = async (data: JobFormValues) => {
    try {
      setSubmitError(null);
      await createJob(data);
      reset();
      if (onSuccess) onSuccess();
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Failed to create job.",
      );
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 mb-6">Post a New Job</h3>

      {submitError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Job Title
            </label>
            <Input
              {...register("title")}
              placeholder="e.g. Senior Brand Designer"
              error={errors.title?.message}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Company Name
            </label>
            <Input
              {...register("company")}
              placeholder="e.g. Acme Corp"
              error={errors.company?.message}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Location
            </label>
            <Input
              {...register("location")}
              placeholder="e.g. San Francisco, CA or Remote"
              error={errors.location?.message}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Category
            </label>
            <Select
              {...register("category")}
              error={errors.category?.message}
              defaultValue=""
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Engineering">Engineering</option>
              <option value="Finance">Finance</option>
              <option value="Business">Business</option>
              <option value="Technology">Technology</option>
              <option value="Human Resource">Human Resource</option>
            </Select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Salary Range
          </label>
          <Input
            {...register("salary")}
            placeholder="e.g. $80k - $120k"
            error={errors.salary?.message}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Description
          </label>
          <Textarea
            {...register("description")}
            placeholder="Job responsibilities, requirements, and benefits..."
            error={errors.description?.message}
            className="min-h-40"
          />
        </div>

        <div className="flex justify-end border-t border-slate-100 pt-5 mt-6">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isSubmitting}
            className="w-full md:w-auto min-w-38"
          >
            Post Job
          </Button>
        </div>
      </form>
    </div>
  );
}
