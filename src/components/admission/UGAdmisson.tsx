import {
  GraduationCap,
  ClipboardCheck,
  FileText,
  CalendarClock,
  School,
  CheckCircle2,
} from "lucide-react";

import EligibilityCard from "./EligibilityCard";

const admissionSteps = [
  {
    title: "Appear in JEE (Main)",
    desc: "Candidates must qualify JEE(Main) conducted by NTA.",
  },
  {
    title: "UGEAC Registration",
    desc: "Register through BCECEB for UGEAC Counselling.",
  },
  {
    title: "Choice Filling",
    desc: "Select Katihar Engineering College and preferred branch.",
  },
  {
    title: "Seat Allotment",
    desc: "Seat allotted according to merit, reservation and availability.",
  },
  {
    title: "Document Verification",
    desc: "Verify original certificates at the reporting centre.",
  },
  {
    title: "Admission Confirmation",
    desc: "Pay admission fee and report to the institute.",
  },
];

export default function UGAdmission() {
  return (
    <section className="space-y-10">

      {/* Heading */}

      <div className="ml-6">

        <div className="inline-flex items-center gap-3 rounded-full bg-green-50 px-5 py-2">

          <GraduationCap
            size={20}
            className="text-[rgb(14,110,74)]"
          />

          <span className="font-semibold text-[rgb(14,110,74)]">
            Undergraduate Programme
          </span>

        </div>

        <h2 className="mt-5 text-3xl font-bold text-gray-900 lg:text-4xl">
          B.Tech Admission
        </h2>

        <p className="mt-4 max-w-4xl text-lg leading-8 text-gray-600">

          Katihar Engineering College offers four-year
          Bachelor of Technology programmes in various
          engineering disciplines. Admissions are conducted
          through the Bihar Combined Entrance Competitive
          Examination Board (BCECEB) under the UGEAC
          counselling process using valid JEE(Main) scores.

        </p>

      </div>

      {/* Timeline */}

      <div className="rounded-3xl border border-green-100 bg-linear-to-br from-white to-green-50 p-8 shadow">

        <div className="flex items-center gap-3">

          <CalendarClock
            className="text-[rgb(14,110,74)]"
            size={28}
          />

          <h3 className="text-2xl font-bold">
            Admission Process
          </h3>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {admissionSteps.map((step, index) => (

            <div
              key={index}
              className="relative rounded-2xl border border-green-100 bg-white p-6 transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full bg-[rgb(14,110,74)] text-sm font-bold text-white">

                {index + 1}

              </div>

              <h4 className="mt-4 text-lg font-semibold">

                {step.title}

              </h4>

              <p className="mt-3 leading-7 text-gray-600">

                {step.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Eligibility */}

      <div className="grid gap-8 lg:grid-cols-3">

        <EligibilityCard
          icon={School}
          title="Academic Eligibility"
          subtitle="Minimum qualification"

          items={[
            "Passed 10+2 or equivalent",
            "Physics, Chemistry & Mathematics",
            "Recognized Board",
            "Eligible under Govt. norms",
          ]}
        />

        <EligibilityCard
          icon={ClipboardCheck}
          title="Entrance Requirement"

          subtitle="Counselling"

          items={[
            "Valid JEE(Main) Score",
            "Register for UGEAC",
            "Choice Filling",
            "Seat Allotment",
          ]}
        />

        <EligibilityCard
          icon={FileText}
          title="Documents Required"

          subtitle="Carry originals"

          items={[
            "10th Marksheet",
            "12th Marksheet",
            "JEE(Main) Scorecard",
            "Migration Certificate",
            "Transfer Certificate",
            "Caste Certificate (if applicable)",
            "Income Certificate",
            "Aadhar Card",
            "Passport Size Photographs",
          ]}
        />

      </div>

      {/* Important Points */}

      <div className="rounded-3xl border border-green-100 bg-white p-8 shadow">

        <div className="flex items-center gap-3">

          <CheckCircle2
            className="text-[rgb(14,110,74)]"
            size={28}
          />

          <h3 className="text-2xl font-bold">

            Important Information

          </h3>

        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">

          {[
            "Admissions are based on UGEAC counselling conducted by BCECEB.",
            "Seat allotment depends on merit, reservation and seat availability.",
            "Candidates must report within the stipulated dates.",
            "Original documents are mandatory during admission.",
            "Failure to report within the deadline may result in cancellation of admission.",
            "Institute follows AICTE, BEU and Government of Bihar regulations.",
          ].map((point, i) => (

            <div
              key={i}
              className="flex gap-3"
            >

              <CheckCircle2
                size={18}
                className="mt-1 shrink-0 text-[rgb(14,110,74)]"
              />

              <p className="leading-7 text-gray-700">

                {point}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}