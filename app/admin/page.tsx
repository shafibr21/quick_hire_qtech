"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AdminJobForm } from "@/components/forms/AdminJobForm";
import { AdminJobTable } from "@/components/admin/AdminJobTable";
import { Job } from "@/lib/types";
import { fetchJobs } from "@/lib/api";

export default function AdminPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadJobs = async () => {
    try {
      setIsLoading(true);
      const data = await fetchJobs();
      setJobs(data);
    } catch (error) {
      console.error("Failed to fetch jobs", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 pt-24 pb-20">
        <Container>
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Admin Dashboard
            </h1>
            <p className="text-slate-600">
              Manage your job postings and applications in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1">
              {/* Sticky to keep form visible while scrolling table */}
              <div className="sticky top-24">
                <AdminJobForm onSuccess={loadJobs} />
              </div>
            </div>

            <div className="lg:col-span-2">
              <AdminJobTable
                jobs={jobs}
                onRefresh={loadJobs}
                isLoading={isLoading}
              />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
