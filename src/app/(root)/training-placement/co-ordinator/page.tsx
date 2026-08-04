"use client";

import { useEffect, useState } from "react";
import { Users, Loader2 } from "lucide-react";

import EmptyState from "@/components/shared/EmptyState";

type PlacementCoordinator = {
  id: string;
  name: string;
  department: string;
  email: string;
};

const StudentsPlacementCoordinatorPage = () => {
  const [coordinators, setCoordinators] = useState<PlacementCoordinator[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoordinators = async () => {
      try {
        // Replace with your backend API
        await fetch("/api/student-placement-coordinators");

        // Currently no data available
        setCoordinators([]);
      } catch (error) {
        console.error(error);
        setCoordinators([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCoordinators();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#094d33] via-[#0e6e4a] to-[#16a56f] px-8 py-7 shadow-lg">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative flex items-center justify-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
            <Users className="h-7 w-7 text-white" />
          </div>

          <h1 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Students Placement Coordinator
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 rounded-2xl border border-[#cfe6d8] bg-white p-8 shadow-sm">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-10 w-10 animate-spin text-[#0e6e4a]" />

            <p className="mt-4 text-slate-600">
              Loading placement coordinator details...
            </p>
          </div>
        ) : coordinators.length === 0 ? (
          <EmptyState
            icon={Users}
            title="Placement Coordinator Details Coming Soon"
            description="Information about Student Placement Coordinators will be published here once it becomes available."
          />
        ) : (
          <div>{/* Future Coordinator Table/List */}</div>
        )}
      </div>
    </section>
  );
};

export default StudentsPlacementCoordinatorPage;
