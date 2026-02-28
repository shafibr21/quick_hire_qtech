"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  CheckCircle2,
  User,
  Mail,
  Link as LinkIcon,
  FileText,
} from "lucide-react";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";
import { createApplication } from "@/lib/api";

const applySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  resume_link: z
    .string()
    .url("Please enter a valid URL (e.g., https://linkedin.com/...)"),
  cover_note: z
    .string()
    .min(10, "Cover note must be at least 10 characters")
    .max(500, "Cover note is too long"),
});

type ApplyFormValues = z.infer<typeof applySchema>;

interface ApplyFormProps {
  jobId: string;
}

export function ApplyForm({ jobId }: ApplyFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ApplyFormValues>({
    resolver: zodResolver(applySchema),
  });

  const onSubmit = async (data: ApplyFormValues) => {
    try {
      setSubmitError(null);
      await createApplication({ job_id: jobId, ...data });
      setIsSuccess(true);
      reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Failed to submit application. Please try again.",
      );
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center flex flex-col items-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-6">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          Application Sent!
        </h3>
        <p className="text-slate-600 mb-8 max-w-sm">
          Thank you for applying. The employer will review your application and
          contact you directly.
        </p>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setIsSuccess(false)}
        >
          Submit another application
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 mb-6">
        Apply for this job
      </h3>

      {submitError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Full Name
          </label>
          <Input
            {...register("name")}
            placeholder="John Doe"
            icon={<User size={18} />}
            error={errors.name?.message}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Email Address
          </label>
          <Input
            {...register("email")}
            type="email"
            placeholder="john@example.com"
            icon={<Mail size={18} />}
            error={errors.email?.message}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Resume / Portfolio URL
          </label>
          <Input
            {...register("resume_link")}
            type="url"
            placeholder="https://your-portfolio.com"
            icon={<LinkIcon size={18} />}
            error={errors.resume_link?.message}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Cover Note
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute top-3 left-0 flex items-center pl-3 text-slate-400">
              <FileText size={18} />
            </div>
            <Textarea
              {...register("cover_note")}
              placeholder="Why are you a great fit for this role?"
              className="pl-10"
              error={errors.cover_note?.message}
            />
          </div>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full mt-2"
          isLoading={isSubmitting}
        >
          Submit Application
        </Button>
      </form>
    </div>
  );
}
