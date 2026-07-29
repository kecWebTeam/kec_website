"use client";

import { useEffect, useState } from "react";
import { ShieldAlert, Loader2 } from "lucide-react";

// Define the type for Anti-Ragging data
type AntiRagging = {
  id: number;
  title: string;
};

const AntiRaggingPage = () => {
  const [antiRagging, setAntiRagging] = useState<AntiRagging[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAntiRagging = async () => {
      try {
        // Dummy API
        await fetch("/api/anti-ragging");

        // Currently no Anti-Ragging data available
        setAntiRagging([]);
      } catch (error) {
        console.error(error);
        setAntiRagging([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAntiRagging();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#094d33] via-[#0e6e4a] to-[#16a56f] px-8 py-7 shadow-lg">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative flex items-center justify-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
            <ShieldAlert className="h-7 w-7 text-white" />
          </div>

          <h1 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Anti-Ragging
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 rounded-2xl border border-[#cfe6d8] bg-white p-8 shadow-sm">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-10 w-10 animate-spin text-[#0e6e4a]" />
            <p className="mt-4 text-slate-600">
              Loading anti-ragging information...
            </p>
          </div>
        ) : antiRagging.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#cfe6d8] bg-[#f8fcfa] py-20">
            <ShieldAlert className="h-12 w-12 text-[#0e6e4a]" />

            <h2 className="mt-5 text-2xl font-semibold text-[#0e6e4a]">
              Anti-Ragging Information Coming Soon
            </h2>

            <p className="mt-3 max-w-xl text-center text-base leading-7 text-slate-600">
              The institute's Anti-Ragging Committee details, helpline numbers,
              guidelines, and related documents will be published here once they
              become available.
            </p>
          </div>
        ) : (
          <div>{/* Future anti-ragging content */}</div>
        )}
      </div>
    </section>
  );
};

export default AntiRaggingPage;
