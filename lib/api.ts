import { Job, Application } from "./types";

// ---- Transform helpers ----
// API responses use _id/createdAt, but our frontend types use id/created_at

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

// ---- Client-safe functions (fetch via API routes) ----

export async function fetchJobs(): Promise<Job[]> {
  const res = await fetch("/api/jobs");
  const data = await res.json();
  if (!data.success) throw new Error(data.message || "Failed to fetch jobs");
  return (data.data as unknown[]).map(transformJob);
}

export async function createJob(
  jobData: Omit<Job, "id" | "created_at">,
): Promise<Job> {
  const res = await fetch("/api/jobs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(jobData),
  });
  const data = await res.json();
  if (!data.success) throw new Error(data.message || "Failed to create job");
  return transformJob(data.data);
}

export async function deleteJob(id: string): Promise<void> {
  const res = await fetch(`/api/jobs/${id}`, { method: "DELETE" });
  const data = await res.json();
  if (!data.success) throw new Error(data.message || "Failed to delete job");
}

export async function createApplication(
  appData: Omit<Application, "id" | "created_at">,
): Promise<Application> {
  const res = await fetch("/api/applications", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(appData),
  });
  const data = await res.json();
  if (!data.success)
    throw new Error(data.message || "Failed to submit application");
  return data.data;
}
