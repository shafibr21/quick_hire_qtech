import Link from "next/link";
import { Container } from "../layout/Container";
import {
  ArrowRight,
  PenTool,
  BarChart3,
  MonitorPlay,
  Calculator,
  Code2,
  Briefcase,
  Users,
  Monitor,
} from "lucide-react";

// Mock Data
const categories = [
  { name: "Design", count: "235 jobs available", icon: PenTool },
  { name: "Sales", count: "450 jobs available", icon: BarChart3 },
  { name: "Marketing", count: "140 jobs available", icon: MonitorPlay },
  { name: "Finance", count: "325 jobs available", icon: Calculator },
  { name: "Technology", count: "436 jobs available", icon: Monitor },
  { name: "Engineering", count: "542 jobs available", icon: Code2 },
  { name: "Business", count: "211 jobs available", icon: Briefcase },
  { name: "Human Resource", count: "346 jobs available", icon: Users },
];

const CategorySection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 font-clash">
            Explore by{" "}
            <span className="text-blue-500 font-clash">category</span>
          </h2>
          <Link
            href="#"
            className="hidden sm:inline-flex items-center gap-2 text-[#4F46E5] font-semibold hover:gap-3 transition-all font-epilogue"
          >
            Show all jobs <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                href="#"
                key={category.name}
                className="group p-6 border border-slate-200 hover:bg-[#4F46E5] hover:shadow-lg transition-all font-epilogue flex items-center justify-between md:flex-col md:items-start"
              >
                {/* Top Section */}
                <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-0 md:w-full">
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center text-[#4F46E5] md:mb-6 group-hover:text-white transition-colors">
                    <Icon size={24} />
                  </div>

                  {/* Text */}
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-white">
                      {category.name}
                    </h3>

                    <div className="flex items-center mt-1">
                      <p className="text-sm text-slate-500 group-hover:text-slate-300">
                        {category.count}
                      </p>

                      <ArrowRight
                        className="ml-auto text-slate-500 group-hover:text-white transition-colors hidden sm:inline-flex"
                        size={20}
                      />
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <ArrowRight
                  className="text-slate-500 group-hover:text-white transition-colors md:mt-8 md:self-end sm:hidden"
                  size={20}
                />
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-[#4F46E5] font-semibold font-epilogue"
          >
            Search all jobs <ArrowRight size={20} />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
