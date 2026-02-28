"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "../ui/Button";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 border-b border-slate-100 bg-white backdrop-blur-md z-50">
      <Container className="flex h-16 items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="QuickHire Logo" width={32} height={32} />
            <span className="text-xl font-redhat tracking-tight text-slate-900 font-bold">
              QuickHire
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors font-expilogue">
              Find Jobs
            </Link>
            <Link href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors font-expilogue">
               Browse Companies
            </Link>
          </nav>
        </div>

        {/* Right Section */}
        <div>
            <div className="flex items-center gap-4">
          <Link
            href="/admin"
            className="hidden md:block text-sm font-bold text-blue-600 hover:text-slate-900 font-epilogue"
          >
            Login
          </Link>
            <div className='h-10 border border-slate-200' />
          <Button
            variant="primary"
            size="sm"
            className="hidden md:inline-flex font-epilogue"
          >
            Sign Up
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-slate-200"
          >
            <div className="space-y-1">
              <Image src="/mobile_menu.svg" alt="Menu Icon" width={50} height={50} />
            </div>
          </button>
        </div>
        </div>
      </Container>

      {/* Mobile Dropdown Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-sm">
          <div className="flex flex-col gap-4 px-6 py-6">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-slate-700"
            >
              Find Job
            </Link>

            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-slate-700"
            >
              Companies
            </Link>

            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-slate-700"
            >
              Login
            </Link>

            <Button
              variant="primary"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}