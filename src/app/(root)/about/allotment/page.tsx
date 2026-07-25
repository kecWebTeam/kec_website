"use client";

import { Loader2 } from "lucide-react";
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
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-black">
          Allotment and Surrender Report
        </h1>

        <div className="mx-auto mt-3 h-1 w-56 rounded-full bg-[#0e6e4a]" />
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
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#cfe6d8] bg-[#f8fcfa] py-16">
            <h3 className="text-2xl font-semibold text-[#0e6e4a]">
              Coming Soon
            </h3>

            <p className="mt-3 text-gray-600">
              The year-wise fund allotment and surrender reports will be
              published here once available.
            </p>
          </div>
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
