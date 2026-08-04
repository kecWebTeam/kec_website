"use client";

import { useEffect, useState } from "react";
import { CalendarX2, Loader2, FileText } from "lucide-react";
import EmptyState from "@/components/shared/EmptyState";

// Define the type for holiday records
type Holiday = {
  id: number;
  title: string;
};

const HolidayPage = () => {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        // Replace this with your actual API
        const res = await fetch("https://api.example.com/holidays");

        if (!res.ok) {
          throw new Error("Failed to fetch holidays");
        }

        const data = await res.json();

        // Example mapping
        const formatted = data.map((item: any) => ({
          id: item.id,
          title: item.title,
        }));

        setHolidays(formatted);
      } catch (error) {
        console.error(error);
        setHolidays([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHolidays();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#094d33] via-[#0e6e4a] to-[#16a56f] px-8 py-7 shadow-lg">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative flex items-center justify-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
            <CalendarX2 className="h-7 w-7 text-white" />
          </div>

          <h1 className="text-3xl font-bold text-white md:text-4xl">
            List of Holidays
          </h1>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-[#cfe6d8] bg-white p-8 shadow-sm">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-10 w-10 animate-spin text-[#0e6e4a]" />
            <p className="mt-4 text-slate-600">Loading holidays...</p>
          </div>
        ) : holidays.length === 0 ? (
          <EmptyState
            icon={CalendarX2}
            title="Holiday List Coming Soon"
            description="The official list of holidays will be published here once it
              becomes available."
          />
        ) : (
          <div className="space-y-4">
            {holidays.map((holiday) => (
              <div
                key={holiday.id}
                className="flex items-center justify-between rounded-xl border border-[#cfe6d8] p-5 transition hover:border-[#0e6e4a]"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-[#0e6e4a]" />
                  <span className="font-medium capitalize">
                    {holiday.title}
                  </span>
                </div>

                <button className="rounded-lg bg-[#0e6e4a] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#0f8a5c]">
                  View
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HolidayPage;
