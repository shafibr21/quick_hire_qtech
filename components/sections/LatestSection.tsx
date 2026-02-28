import { Container } from "../layout/Container";
import { ArrowRight } from "lucide-react";
import { JobList } from "../jobs/JobList";
import Link from "next/link";
import { JobCard } from "../jobs/JobCard";
import Image from "next/image";
import { Job } from "@/lib/types";

interface LatestSectionProps {
  jobs: Job[];
}

const LatestSection = ({ jobs }: LatestSectionProps) => {
  return (
    <section className="relative py-10 lg:py-20 bg-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <Image
        src="/Pattern-Latest.svg"
        alt=""
        width={800}
        height={900}
        className="absolute top-0 right-0 pointer-events-none select-none"
        aria-hidden="true"
      />
      <Container className="relative z-10">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Latest <span className="text-blue-500">jobs open</span>
          </h2>
          <Link
            href="#"
            className="hidden sm:inline-flex items-center gap-2 text-[#4F46E5] font-semibold hover:gap-3 transition-all font-epilogue"
          >
            Show all jobs <ArrowRight size={20} />
          </Link>
        </div>

        <JobList columns={2}>
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} variant="horizontal" />
          ))}
        </JobList>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="#"
            className="hidden sm:inline-flex items-center gap-2 text-[#4F46E5] font-semibold hover:gap-3 transition-all font-epilogue"
          >
            Show all jobs <ArrowRight size={20} />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default LatestSection;
