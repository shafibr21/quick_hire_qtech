import { Container } from "./Container";
import { Button } from "../ui/Button";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#202430] text-slate-300 py-16 mt-auto font-epilogue">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo + Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/logo.svg"
                alt="QuickHire Logo"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold tracking-tight text-white font-redhat">
                QuickHire
              </span>
            </div>

            <p className="text-sm leading-relaxed text-slate-400">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>
          <div className="flex flex-row gap-24 md:gap-35">
            {/* About */}
            <div>
              <h3 className="text-white font-semibold mb-6">About</h3>
              <ul className="space-y-4 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Companies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Advice
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-6">Resources</h3>
              <ul className="space-y-4 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Get job notifications
            </h3>

            <p className="text-sm text-slate-400 mb-6">
              The latest job news, articles, sent to your inbox weekly.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Button
                type="button"
                variant="primary"
                size="sm"
                className="w-32 h-13"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col items-center gap-6 text-sm text-slate-400 md:flex-row md:justify-between">
          <p className="text-center md:text-left">
            2023 © QuickHire. All rights reserved.
          </p>

          <div className="flex gap-4">
            {[
              { name: "Facebook", src: "/Facebook.svg" },
              { name: "Instagram", src: "/Instagram.svg" },
              { name: "Dribbble", src: "/Dribbble.svg" },
              { name: "LinkedIn", src: "/Linkedin.svg" },
              { name: "Twitter", src: "/Twitter.svg" },
            ].map((i) => (
              <a
                key={i.name}
                href="#"
                className="h-9 w-9 rounded-full bg-slate-700 flex items-center justify-center hover:bg-slate-600 transition-all duration-200"
              >
                <Image src={i.src} alt={i.name} width={16} height={16} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
