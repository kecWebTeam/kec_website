"use client";

import { useEffect, useState } from "react";
import { UsersRound, Loader2 } from "lucide-react";

// Define the type for Academic Council data
type AcademicCouncil = {
  id: number;
  title: string;
};

const AcademicCouncilPage = () => {
  const [minutes, setMinutes] = useState<AcademicCouncil[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMinutes = async () => {
      try {
        // Dummy API (replace with your backend later)
        await fetch("/api/academic-council");

        // Currently no Academic Council data
        setMinutes([]);
      } catch (error) {
        console.error(error);
        setMinutes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMinutes();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#094d33] via-[#0e6e4a] to-[#16a56f] px-8 py-7 shadow-lg">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative flex items-center justify-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
            <UsersRound className="h-7 w-7 text-white" />
          </div>

          <h1 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            MoM of Academic Council
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 rounded-2xl border border-[#cfe6d8] bg-white p-8 shadow-sm">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-10 w-10 animate-spin text-[#0e6e4a]" />
            <p className="mt-4 text-slate-600">
              Loading Academic Council records...
            </p>
          </div>
        ) : minutes.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#cfe6d8] bg-[#f8fcfa] py-20">
            <UsersRound className="h-12 w-12 text-[#0e6e4a]" />

            <h2 className="mt-5 text-2xl font-semibold text-[#0e6e4a]">
              Meeting Minutes Coming Soon
            </h2>

            <p className="mt-3 max-w-xl text-center text-base leading-7 text-slate-600">
              Minutes of Meeting (MoM) of the Academic Council will be published
              here once they become available.
            </p>
          </div>
        ) : (
          <div>{/* Future Academic Council records */}</div>
        )}
      </div>
    </section>
  );
};

export default AcademicCouncilPage;
