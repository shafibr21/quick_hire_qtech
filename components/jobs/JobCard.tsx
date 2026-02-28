import React from "react";
import Link from "next/link";
import { Job } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Building2 } from "lucide-react";

interface JobCardProps {
  job: Job;
  variant?: "vertical" | "horizontal";
  className?: string;
}

export function JobCard({
  job,
  variant = "vertical",
  className,
}: JobCardProps) {
  // Mock tags based on category to match Figma visual style
  const tags = job.category.split(",").map((t) => t.trim()) || [job.category];

  const getTagColor = (tag: string) => {
    switch (tag.toLowerCase()) {
      case "marketing":
        return "text-amber-500 bg-amber-50";
      case "design":
        return "text-purple-500 bg-purple-50";
      case "technology":
        return "text-blue-500  bg-blue-50";
      case "finance":
        return "text-emerald-500 bg-emerald-50";
      default:
        return "text-slate-500 bg-slate-50";
    }
  };

  if (variant === "vertical") {
    return (
      <Link
        href={`/jobs/${job.id}`}
        className={cn(
          "group flex flex-col p-6 border border-slate-200 bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-transparent transition-all duration-300 font-epilogue",
          className,
        )}
      >
        <div className="flex justify-between items-start mb-6">
          <div className="h-12 w-12 flex items-center justify-center text-slate-500">
            <Building2 className="w-6 h-6" />
          </div>
          <span className="px-3 py-1 font-epilogue text-xs font-semibold text-blue-600 border border-blue-400">
            Full Time
          </span>
        </div>

        <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-[#4F46E5] transition-colors">
          {job.title}
        </h4>
        <p className="text-sm font-medium text-slate-500 mb-4">
          {job.company} • {job.location}
        </p>

        <p className="text-sm text-slate-600 mb-6 grow line-clamp-2 leading-relaxed">
          {job.description}
        </p>

        <div className="flex gap-2 mt-auto overflow-x-auto sm:flex-wrap scrollbar-hide">
          {tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap shrink-0",
                getTagColor(tag),
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/jobs/${job.id}`}
      className={cn(
        "group flex p-6 gap-6 items-start bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-transparent transition-all duration-300 font-epilogue",
        className,
      )}
    >
      <div className="h-14 w-14 flex items-center justify-center text-slate-500 shrink-0">
        <Building2 className="w-7 h-7" />
      </div>

      <div className="grow">
        <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-[#4F46E5] transition-colors">
          {job.title}
        </h4>
        <p className="text-sm font-medium text-slate-500 mb-3">
          {job.company} • {job.location}
        </p>

        <div className="flex flex-wrap gap-2 items-center">
          <span className="px-3 py-1 rounded-2xl font-epilogue text-xs font-semibold text-emerald-600 bg-emerald-100">
            Full Time
          </span>
          <div className="h-7 border border-slate-200" />
          {tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-semibold border font-epilogue items-center",
                getTagColor(tag),
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
