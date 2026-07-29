"use client";

import { BookOpenText, Download, FileText } from "lucide-react";
import Link from "next/link";

const syllabus = [
  {
    id: 1,
    title:
      "New Course Curriculum for Engineering & Technology for 1st & 2nd Semester based on AICTE Model Curriculum to be followed from Session 2018-19 onwards",
    href: "#", // Replace with actual PDF
  },
  {
    id: 2,
    title: "Revised B.Tech Syllabus",
    href: "#", // Replace with actual PDF
  },
];

const SyllabusPage = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#094d33] via-[#0e6e4a] to-[#16a56f] px-8 py-7 shadow-lg">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative flex items-center justify-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
            <BookOpenText className="h-7 w-7 text-white" />
          </div>

          <h1 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Syllabus
          </h1>
        </div>
      </div>

      {/* Syllabus List */}
      <div className="mt-10 rounded-2xl border border-[#cfe6d8] bg-white p-8 shadow-sm">
        <div className="space-y-5">
          {syllabus.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-5 rounded-xl border border-[#cfe6d8] bg-[#f8fcfa] p-6 transition-all duration-300 hover:border-[#0e6e4a] hover:shadow-md md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#0e6e4a]/10 p-3">
                  <FileText className="h-6 w-6 text-[#0e6e4a]" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                </div>
              </div>

              <Link
                href={item.href}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0e6e4a] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0f8a5c] hover:shadow-lg"
              >
                <Download className="h-4 w-4" />
                Download
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SyllabusPage;
