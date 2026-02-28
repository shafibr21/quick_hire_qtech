import Image from "next/image"
import { JobFilters } from "../jobs/JobFilters"
import { Container } from "../layout/Container"

const HeroSection = () => {
  return (
    <section className="relative bg-[#f4f6fb] pt-20 overflow-hidden">

      {/* Background Pattern */}
      <Image
        src="/Pattern.svg"
        alt="Background pattern"
        width={700}
  height={700}
  className="absolute right-0 top-[-40] opacity-90 pointer-events-none"
      />

      <Container>
        <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-8 z-10">

          {/* LEFT CONTENT */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6 font-clash">
              Discover <br className="hidden lg:block" />
              more than <br className="hidden lg:block" />
              <span className="text-[#26A4FF] relative inline-block">
                5000+ Jobs  
              </span>
            </h1>
            <Image
                src="/highlight.svg"
                alt="Highlight"
                width={500}
                height={24}
              />
            <p className="text-lg text-slate-600 md:my-5 max-w-xl mx-auto lg:mx-0 font-epilogue">
              Great platform for the job seeker that searching for new career heights and passionate about startups.
            </p>

            <div className="relative z-20 w-full">
              <JobFilters />
            </div>

            <p className="mt-6 text-sm text-slate-500 font-epilogue">
              Popular: UI Designer, UX Researcher, Android, Admin
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 relative w-full hidden lg:block">
            <Image
              src="/hero.png"
              alt="Smiling man pointing"
              width={550}
              height={650}
              className="ml-auto  object-contain"
              priority
            />
          </div>
        </div>
      </Container>

      {/* Bottom Right Diagonal Shape */}
      <div className="hidden lg:block absolute -bottom-30 -right-25 w-200 h-64 bg-white clip-diagonal -rotate-25 z-20" />

    </section>
  )
}

export default HeroSection