import { Container } from "../layout/Container";
import Link from "next/link";
import { JobList } from "../jobs/JobList";
import { ArrowRight } from "lucide-react";
import { JobCard } from "../jobs/JobCard";
import { Job } from "@/lib/types";

interface FeaturedSectionProps {
  jobs: Job[];
}

const FeaturedSection = ({ jobs }: FeaturedSectionProps) => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Featured <span className="text-blue-500">jobs</span>
          </h2>
          <Link
            href="#"
            className="hidden sm:inline-flex items-center gap-2 text-[#4F46E5] font-semibold hover:gap-3 transition-all font-epilogue"
          >
            Show all jobs <ArrowRight size={20} />
          </Link>
        </div>

        <div className="flex gap-6 overflow-x-auto sm:hidden scrollbar-hide pb-4 -mx-4 px-4">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              variant="vertical"
              className="max-w-70 shrink-0"
            />
          ))}
        </div>
        <JobList columns={4} className="hidden sm:grid">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} variant="vertical" />
          ))}
        </JobList>

        <div className="mt-2 text-start sm:hidden">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-[#4F46E5] font-semibold hover:gap-3 transition-all font-epilogue"
          >
            Show all jobs <ArrowRight size={20} />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedSection;
