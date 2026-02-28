import { Container } from "../layout/Container";
import Link from "next/link";
import { JobList } from "../jobs/JobList";
import { ArrowRight } from "lucide-react";
import { JobCard } from "../jobs/JobCard";

const mockJobs = [
  {
    id: "1",
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    category: "Marketing, Design",
    description:
      "Revolut is looking for Email Marketing to help the team design and process.",
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, US",
    category: "Design, Business",
    description:
      "Dropbox is looking for Brand Designer to help the team design and process.",
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    category: "Marketing",
    description:
      "Pitch is looking for Email Marketing to help the team design and process.",
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Visual Designer",
    company: "Blinkist",
    location: "Granada, Spain",
    category: "Design",
    description:
      "Blinkist is looking for Visual Designer to help the team design and process.",
    created_at: new Date().toISOString(),
  },
  {
    id: "5",
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    category: "Marketing, Design",
    description:
      "ClassPass is looking for Product Designer to help the team design and process.",
    created_at: new Date().toISOString(),
  },
  {
    id: "6",
    title: "Lead Designer",
    company: "Canva",
    location: "Ontario, Canada",
    category: "Design, Business",
    description:
      "Canva is looking for Lead Designer to help the team design and process.",
    created_at: new Date().toISOString(),
  },
  {
    id: "7",
    title: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    category: "Marketing",
    description:
      "GoDaddy is looking for Brand Strategist to help the team design and process.",
    created_at: new Date().toISOString(),
  },
  {
    id: "8",
    title: "Data Analyst",
    company: "Twitter",
    location: "San Diego, US",
    category: "Technology",
    description:
      "Twitter is looking for Data Analyst to help the team design and process.",
    created_at: new Date().toISOString(),
  },
];

const FeaturedSection = () => {
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
          {mockJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              variant="vertical"
              className="max-w-70 shrink-0"
            />
          ))}
        </div>
        <JobList columns={4} className="hidden sm:grid">
          {mockJobs.map((job) => (
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
