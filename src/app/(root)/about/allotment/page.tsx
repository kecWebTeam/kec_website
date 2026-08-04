"use client";

import { Loader2, FileBarChart2 } from "lucide-react";
import EmptyState from "@/components/shared/EmptyState";
import { useEffect, useState } from "react";

// Modify type based on your API response structure
type AllotmentReport = {
  id: string;
  year: string;
  fileUrl: string;
};

const AllotmentPage = () => {
  const [reports, setReports] = useState<AllotmentReport[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        // Replace with your backend API
        const res = await fetch("/api/allotment-report");

        if (!res.ok) {
          throw new Error("Failed to fetch reports");
        }

        const data: AllotmentReport[] = await res.json();

        setReports(data);
      } catch (error) {
        console.error(error);
        setReports([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      {/* Heading */}
      {/* Hero */}
      <div className="relative mb-10 overflow-hidden rounded-2xl bg-gradient-to-r from-[#094d33] via-[#0e6e4a] to-[#16a56f] px-8 py-7 shadow-lg">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative flex items-center justify-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
            <FileBarChart2 className="h-7 w-7 text-white" />
          </div>

          <h1 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Allotment &amp; Surrender Report
          </h1>
        </div>
      </div>

      <div className="rounded-2xl border border-[#cfe6d8] bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-2xl font-semibold text-[#0e6e4a]">
          Year Wise Fund Allotment and Surrender
        </h2>

        {loading ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-[#cfe6d8] bg-[#f8fcfa] py-16">
            <Loader2 className="h-10 w-10 animate-spin text-[#0e6e4a]" />

            <p className="mt-4 text-sm text-gray-600">Loading reports...</p>
          </div>
        ) : reports.length === 0 ? (
          <EmptyState
            icon={FileBarChart2}
            title="Reports Coming Soon"
            description="The year-wise fund allotment and surrender reports will be published here once they become available."
          />
        ) : (
          <div className="space-y-4">
            {reports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between rounded-lg border border-[#cfe6d8] p-4"
              >
                <span className="font-medium">{report.year}</span>

                <a
                  href={report.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-[#0e6e4a] px-4 py-2 text-white transition hover:bg-[#0f8a5c]"
                >
                  View Report
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllotmentPage;
