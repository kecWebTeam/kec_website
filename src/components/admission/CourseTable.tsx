import {
  MonitorSmartphone,
  Cpu,
  Building2,
  Wrench,
  Zap,
  Network,
  Users,
} from "lucide-react";

const departments = [
  {
    icon: MonitorSmartphone,
    name: "Computer Science & Engineering",
    duration: "4 Years",
    intake: 120,
    lateral: 12,
    color: "bg-blue-50",
  },
  {
    icon: Cpu,
    name: "Electronics & Communication",
    duration: "4 Years",
    intake: 60,
    lateral: 12,
    color: "bg-purple-50",
  },
  {
    icon: Zap,
    name: "Electrical Engineering",
    duration: "4 Years",
    intake: 60,
    lateral: 12,
    color: "bg-yellow-50",
  },
  {
    icon: Building2,
    name: "Civil Engineering",
    duration: "4 Years",
    intake: 60,
    lateral: 12,
    color: "bg-orange-50",
  },
  {
    icon: Wrench,
    name: "Mechanical Engineering",
    duration: "4 Years",
    intake: 60,
    lateral: 12,
    color: "bg-red-50",
  },
];

export default function CourseTable() {
  return (
    <section className="space-y-10">

      <div className="ml-6">

        <span className="rounded-full bg-green-50 px-5 py-2 text-sm font-semibold text-[rgb(14,110,74)]">
          Programmes Offered
        </span>

        <h2 className="mt-5 text-3xl font-bold lg:text-4xl">
          Available Courses
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
          Katihar Engineering College offers undergraduate
          engineering programmes with modern curriculum,
          experienced faculty members and industry-oriented
          learning.
        </p>

      </div>

      <div className="overflow-hidden rounded-3xl border border-green-100 bg-white shadow">

        {/* Table Header - Hidden on Mobile */}
<div className="hidden md:grid grid-cols-12 bg-linear-to-r from-[rgb(14,110,74)] to-[rgb(20,145,98)] px-6 lg:px-8 py-5 text-white">
  <div className="col-span-5 font-semibold">Department</div>

  <div className="col-span-2 text-center font-semibold">
    Duration
  </div>

  <div className="col-span-2 text-center font-semibold">
    Intake
  </div>

  <div className="col-span-3 text-center font-semibold">
    Lateral Entry
  </div>
</div>

{departments.map((dept, index) => {
  const Icon = dept.icon;

  return (
    <div
      key={index}
      className="border-b border-green-100 hover:bg-green-50 transition"
    >
      {/* Desktop */}
      <div className="hidden md:grid grid-cols-12 items-center px-6 lg:px-8 py-6">
        <div className="col-span-5 flex items-center gap-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl ${dept.color}`}
          >
            <Icon
              size={28}
              className="text-[rgb(14,110,74)]"
            />
          </div>

          <div>
            <h3 className="font-semibold">
              {dept.name}
            </h3>

            <p className="text-sm text-gray-500">
              AICTE Approved
            </p>
          </div>
        </div>

        <div className="col-span-2 text-center font-medium">
          {dept.duration}
        </div>

        <div className="col-span-2 flex justify-center">
          <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-[rgb(14,110,74)]">
            {dept.intake}
          </span>
        </div>

        <div className="col-span-3 flex justify-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">
            {dept.lateral}
          </span>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden p-5">
        <div className="flex items-start gap-4">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${dept.color}`}
          >
            <Icon
              size={26}
              className="text-[rgb(14,110,74)]"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-base font-semibold">
              {dept.name}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              AICTE Approved
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Duration</p>
            <p className="mt-1 font-medium">{dept.duration}</p>
          </div>

          <div>
            <p className="text-gray-500">Intake</p>
            <span className="mt-1 inline-block rounded-full bg-green-100 px-3 py-1 font-semibold text-[rgb(14,110,74)]">
              {dept.intake}
            </span>
          </div>

          <div className="col-span-2">
            <p className="text-gray-500">Lateral Entry</p>
            <span className="mt-1 inline-block rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700">
              {dept.lateral}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
})}

      </div>

      {/* Bottom Cards */}

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="rounded-3xl border border-green-100 bg-linear-to-br from-green-50 to-white p-7">

          <Users
            className="text-[rgb(14,110,74)]"
            size={34}
          />

          <h3 className="mt-5 text-2xl font-bold">
            Total Intake
          </h3>

          <h2 className="mt-4 text-5xl font-extrabold text-[rgb(14,110,74)]">
            300
          </h2>

          <p className="mt-2 text-gray-600">
            Students per Academic Session
          </p>

        </div>

        <div className="rounded-3xl border border-green-100 bg-linear-to-br from-green-50 to-white p-7">

          <Network
            className="text-[rgb(14,110,74)]"
            size={34}
          />

          <h3 className="mt-5 text-2xl font-bold">
            Departments
          </h3>

          <h2 className="mt-4 text-5xl font-extrabold text-[rgb(14,110,74)]">
            5
          </h2>

          <p className="mt-2 text-gray-600">
            Engineering Branches
          </p>

        </div>

        <div className="rounded-3xl border border-green-100 bg-linear-to-br from-green-50 to-white p-7">

          <Building2
            className="text-[rgb(14,110,74)]"
            size={34}
          />

          <h3 className="mt-5 text-2xl font-bold">
            Affiliation
          </h3>

          <h2 className="mt-4 text-2xl font-bold text-[rgb(14,110,74)]">
            BEU
          </h2>

          <p className="mt-2 text-gray-600">
            Bihar Engineering University
          </p>

        </div>

      </div>

    </section>
  );
}