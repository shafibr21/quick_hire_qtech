"use client";

import React, { useState } from "react";
import { Job } from "@/lib/types";
import { deleteJob } from "@/lib/api";
import { Button } from "../ui/Button";
import { Loader2, Trash2, AlertTriangle, X } from "lucide-react";

interface AdminJobTableProps {
  jobs: Job[];
  onRefresh: () => void;
  isLoading?: boolean;
}

export function AdminJobTable({
  jobs,
  onRefresh,
  isLoading = false,
}: AdminJobTableProps) {
  const [jobToDelete, setJobToDelete] = useState<Job | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!jobToDelete) return;
    try {
      setIsDeleting(true);
      await deleteJob(jobToDelete.id);
      setJobToDelete(null);
      onRefresh();
    } catch (error) {
      console.error("Failed to delete job", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <h3 className="text-xl font-bold text-slate-900 font-epilogue">Manage Jobs</h3>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full font-epilogue">
          {jobs.length} total
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-600">
          <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-100">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 font-semibold text-slate-900 font-epilogue"
              >
                Job Title
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-semibold text-slate-900 font-epilogue"
              >
                Company
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-semibold text-slate-900 font-epilogue"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-semibold text-slate-900 font-epilogue"
              >
                Date Posted
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-semibold text-slate-900 text-right font-epilogue"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {isLoading ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <Loader2 className="h-8 w-8 text-[#4F46E5] animate-spin mb-4" />
                    <p className="text-sm font-medium text-slate-500">
                      Loading jobs...
                    </p>
                  </div>
                </td>
              </tr>
            ) : jobs.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center">
                  <p className="font-medium text-slate-900">
                    No jobs posted yet
                  </p>
                  <p className="text-slate-500 mt-1">
                    Create a new job to see it listed here.
                  </p>
                </td>
              </tr>
            ) : (
              jobs.map((job) => (
                <tr
                  key={job.id}
                  className="hover:bg-slate-50/80 transition-colors font-epilogue"
                >
                  <td className="px-6 py-4 font-medium text-slate-900 font-epilogue">
                    {job.title}
                  </td>
                  <td className="px-6 py-4 font-epilogue">{job.company}</td>
                  <td className="px-6 py-4 font-epilogue">
                    <span className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-full whitespace-nowrap">
                      {job.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(job.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => setJobToDelete(job)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors inline-flex"
                      title="Delete Job"
                    >
                      <Trash2 size={18} />
                      <span className="sr-only">Delete</span>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {jobToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start mb-4">
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                <AlertTriangle size={24} />
              </div>
              <button
                onClick={() => setJobToDelete(null)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                disabled={isDeleting}
              >
                <X size={20} />
              </button>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Delete Job Post
            </h3>
            <p className="text-slate-600 mb-6">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-slate-900">
                "{jobToDelete.title}"
              </span>
              ? This action cannot be undone and will remove the job from all
              listings.
            </p>

            <div className="flex gap-3 justify-end">
              <Button
                variant="outline"
                onClick={() => setJobToDelete(null)}
                disabled={isDeleting}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                className="bg-red-600 hover:bg-red-700 focus:ring-red-600 text-white"
                onClick={handleDelete}
                isLoading={isDeleting}
              >
                Delete Job
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
