"use client";

import { useEffect, useState } from "react";
import { GraduationCap, Loader2 } from "lucide-react";

import EmptyState from "@/components/shared/EmptyState";

// replace type with your actual data structure for placed students
type PlacedStudent = {
  id: string;
  name: string;
  company: string;
  package: string;
};

const TrainingPlacedStudentsPage = () => {
  const [students, setStudents] = useState<PlacedStudent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlacedStudents = async () => {
      try {
        // Replace with your backend API
        await fetch("/api/placed-students");

        // Currently no data available
        setStudents([]);
      } catch (error) {
        console.error(error);
        setStudents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPlacedStudents();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#094d33] via-[#0e6e4a] to-[#16a56f] px-8 py-7 shadow-lg">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative flex items-center justify-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
            <GraduationCap className="h-7 w-7 text-white" />
          </div>

          <h1 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Training &amp; Placed Students
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 rounded-2xl border border-[#cfe6d8] bg-white p-8 shadow-sm">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-10 w-10 animate-spin text-[#0e6e4a]" />

            <p className="mt-4 text-slate-600">
              Loading placed student records...
            </p>
          </div>
        ) : students.length === 0 ? (
          <EmptyState
            icon={GraduationCap}
            title="Placement Records Coming Soon"
            description="Training and placement records of students will be published here once they become available."
          />
        ) : (
          <div>{/* Future Table/Grid of Placed Students */}</div>
        )}
      </div>
    </section>
  );
};

export default TrainingPlacedStudentsPage;
