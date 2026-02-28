import React from "react";
import { Container } from "../layout/Container";
import Image from "next/image";

const BrandsSection = () => {
  return (
    <div className="bg-white w-full">
      <Container>
        <div className="bg-white py-4 sm:py-10 w-full">
          <p className="text-sm text-slate-400 mb-6 font-medium ext-left font-epilogue">
            Companies we helped grow
          </p>
          <div className="grid grid-cols-2 gap-y-8 gap-x-20 md:gap-x-6 sm:grid-cols-3 lg:flex lg:justify-between lg:items-center">
            {[
              { name: "Vodafone", src: "/vodafone.svg" },
              { name: "Intel", src: "/intel.svg" },
              { name: "Tesla", src: "/tesla.svg" },
              { name: "AMD", src: "/amd.svg" },
              { name: "Talkit", src: "/talkit.svg" },
            ].map((brand) => (
              <div
                key={brand.name}
                className="relative h-8 w-30 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BrandsSection;
