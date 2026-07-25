import StatCard from "./StatCard";

import {
  BookOpen,
  Building2,
  GraduationCap,
  School,
} from "lucide-react";

export default function HistoryContent() {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-10">

      {/* Heading */}

      <div className="flex items-center gap-4">

        <div className="h-16 w-16 rounded-full bg-[rgb(14,110,74)] text-white flex items-center justify-center shadow-lg">
          <BookOpen size={30} />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            History
          </h1>

          <div className="mt-2 w-20 h-1 rounded-full bg-[rgb(14,110,74)]"></div>
        </div>

      </div>

      {/* Paragraph */}

      <div className="mt-8 space-y-7 text-lg leading-9 text-gray-700">

        <p>
          <span className="font-bold text-[rgb(14,110,74)]">
            Katihar Engineering College
          </span>{" "}
          is one of the seventeen engineering colleges
          established under the Department of Science &
          Technology, Government of Bihar.
        </p>

        <p>
          Established in <b>2016</b>, the institution was
          founded with the vision of producing technically
          skilled engineers who can contribute to the
          development of society and industry.
        </p>

        <p>
          The college initially started with three branches:
          <span className="font-semibold">
            {" "}
            Civil Engineering,
          </span>
          <span className="font-semibold">
            {" "}
            Mechanical Engineering,
          </span>{" "}
          and
          <span className="font-semibold">
            {" "}
            Computer Science & Engineering
          </span>
          , each having an intake of 60 students.
        </p>

        <p>
          Since its inception, Katihar Engineering College has
          focused on academic excellence, innovation, research,
          industry collaboration, and holistic student
          development.
        </p>

        <p>
          Today, the institution continues to expand its
          infrastructure, academic programs, and placement
          opportunities while maintaining high standards in
          engineering education.
        </p>

      </div>

      {/* Statistics */}

      <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-6 mt-12">

        <StatCard
          icon={School}
          title="Established"
          value="2016"
        />

        <StatCard
          icon={Building2}
          title="Branches"
          value="3"
        />

        <StatCard
          icon={GraduationCap}
          title="Students Intake"
          value="180"
        />

      </div>

    </div>
  );
}