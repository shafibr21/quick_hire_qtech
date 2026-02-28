import { Container } from "../layout/Container";
import { ArrowRight } from "lucide-react";
import { JobList } from "../jobs/JobList";
import Link from "next/link";
import { JobCard } from "../jobs/JobCard";
import Image from "next/image";

const latestJobs = [
  {
    id: "9",
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    category: "Marketing, Design",
    description: "We are looking for a Social Media Assistant.",
    created_at: new Date().toISOString(),
  },
  {
    id: "10",
    title: "Social Media Assistant",
    company: "Netlify",
    location: "Paris, France",
    category: "Marketing, Design",
    description: "We are looking for a Social Media Assistant.",
    created_at: new Date().toISOString(),
  },
  {
    id: "11",
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, US",
    category: "Design",
    description: "We are looking for a Brand Designer.",
    created_at: new Date().toISOString(),
  },
  {
    id: "12",
    title: "Brand Designer",
    company: "Maze",
    location: "San Francisco, US",
    category: "Design",
    description: "We are looking for a Brand Designer.",
    created_at: new Date().toISOString(),
  },
  {
    id: "13",
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    category: "Technology, Design",
    description: "We are looking for a Interactive Developer.",
    created_at: new Date().toISOString(),
  },
  {
    id: "14",
    title: "Interactive Developer",
    company: "Udacity",
    location: "Hamburg, Germany",
    category: "Technology, Design",
    description: "We are looking for a Interactive Developer.",
    created_at: new Date().toISOString(),
  },
  {
    id: "15",
    title: "HR Manager",
    company: "Packer",
    location: "Lucerne, Switzerland",
    category: "Human Resource",
    description: "We are looking for a HR Manager.",
    created_at: new Date().toISOString(),
  },
  {
    id: "16",
    title: "HR Manager",
    company: "Webflow",
    location: "Lucerne, Switzerland",
    category: "Human Resource",
    description: "We are looking for a HR Manager.",
    created_at: new Date().toISOString(),
  },
];

const LatestSection = () => {
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
          {latestJobs.map((job) => (
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
