import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Building2,
  MapPin,
  Clock,
  DollarSign,
  Calendar,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ApplyForm } from "@/components/forms/ApplyForm";
import { getJobById } from "@/lib/api.server";

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const job = await getJobById(id);

  if (!job) {
    notFound();
  }

  const tags = job.category.split(",").map((t) => t.trim()) || [job.category];

  // Compute relative time from created_at
  const postedDate = new Date(job.created_at);
  const now = new Date();
  const diffMs = now.getTime() - postedDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  let postedAgo: string;
  if (diffDays === 0) {
    postedAgo = "Posted today";
  } else if (diffDays === 1) {
    postedAgo = "Posted 1 day ago";
  } else if (diffDays < 30) {
    postedAgo = `Posted ${diffDays} days ago`;
  } else if (diffDays < 60) {
    postedAgo = "Posted 1 month ago";
  } else {
    postedAgo = `Posted ${Math.floor(diffDays / 30)} months ago`;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16 bg-slate-50 min-h-screen">
        <div className="bg-white border-b border-slate-200 py-8 lg:py-12">
          <Container>
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-8"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to jobs
            </Link>

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex items-start gap-6">
                <div className="h-20 w-20 flex items-center justify-center rounded-2xl bg-slate-100 text-slate-500 shrink-0 border border-slate-200">
                  <Building2 className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                    {job.title}
                  </h1>
                  <p className="text-lg text-slate-600 mb-4">{job.company}</p>

                  <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full border border-emerald-200">
                      <Clock size={16} /> Full Time
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={16} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <DollarSign size={16} /> {job.salary || "Competitive"}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={16} /> {postedAgo}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 shrink-0 md:mt-0 mt-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm font-semibold text-slate-600 border border-slate-200 bg-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </div>

        <Container className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Job Description
                </h2>
                <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                  {job.description.split("\n").map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph.trim() === "" ? <br /> : paragraph}
                    </p>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200" />

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Share this job
                </h3>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-md text-sm font-medium hover:bg-slate-200 transition-colors">
                    Copy Link
                  </button>
                  <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-md text-sm font-medium hover:bg-slate-200 transition-colors">
                    Twitter
                  </button>
                  <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-md text-sm font-medium hover:bg-slate-200 transition-colors">
                    LinkedIn
                  </button>
                </div>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ApplyForm jobId={job.id} />
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
