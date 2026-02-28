import React from "react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import Image from "next/image";

const CTASection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="relative py-16 md:py-20">
          {/* Purple background layer — overflow-hidden keeps decorations clipped */}
          <div className="absolute inset-0 bg-[#4F46E5] overflow-hidden">
            {/* Top-left corner cut */}
            <div className="absolute top-0 left-0 w-14 h-14 md:w-24 md:h-24 bg-white clip-top-left" />

            {/* Bottom-right corner cut */}
            <div className="absolute bottom-0 right-0 w-14 h-14 md:w-24 md:h-24 bg-white clip-bottom-right" />
          </div>

          {/* Content layer — sits above bg, dashboard can overflow on desktop */}
          <div className="relative z-10 flex flex-col md:flex-row items-center text-white">
            {/* LEFT TEXT */}
            <div className="flex-1 text-center md:text-left px-8 md:px-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                Start posting <br className="hidden md:block" />
                jobs today
              </h2>

              <p className="text-indigo-100 mb-6 md:mb-8">
                Start posting jobs for only $10.
              </p>

              <Button
                size="lg"
                className="bg-white text-[#4F46E5] font-bold hover:bg-gray-100 rounded-sm w-full md:w-auto"
              >
                Sign Up for Free
              </Button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex-1 relative mt-10 md:mt-0 w-full">
              {/* Mobile Image */}
              <div className="relative w-full h-45 md:hidden">
                <Image
                  src="/Dashboard_Company_mobile.svg"
                  alt="Dashboard mobile"
                  fill
                  className="object-contain object-right"
                />
              </div>

              {/* Desktop Image — translate shifts it visually without affecting layout,
                  so it overflows past the purple background */}
              <div className="relative w-full h-95 hidden md:block md:translate-x-3 md:translate-y-5">
                <Image
                  src="/Dashboard_Company.svg"
                  alt="Dashboard desktop"
                  fill
                  className="object-contain object-right drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
