import { CalendarDays, Download } from "lucide-react";
import Link from "next/link";

const AcademicCalendarPage = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#094d33] via-[#0e6e4a] to-[#16a56f] px-8 py-7 shadow-lg">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative flex items-center justify-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
            <CalendarDays className="h-7 w-7 text-white" />
          </div>

          <h1 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Academic Calendar
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 rounded-2xl border border-[#cfe6d8] bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-[#0e6e4a]">
          Stay updated with the latest academic schedules.
        </h2>

        <div className="mt-8 flex flex-col gap-4 rounded-xl border border-[#cfe6d8] bg-[#f8fcfa] p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Bihar Engineering University Calendar
            </h3>

            <p className="mt-2 text-base leading-7 text-slate-600">
              Download the latest academic calendar issued by Bihar Engineering
              University.
            </p>
          </div>

          <Link
            href="https://beu-bih.ac.in/BEUP/Academic_Calendar.aspx"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0e6e4a] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0f8a5c] hover:shadow-lg"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AcademicCalendarPage;
