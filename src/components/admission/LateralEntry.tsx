import {
  ArrowRight,
  Building2,
  GraduationCap,
  ClipboardCheck,
  FileText,
  BadgeCheck,
  Workflow,
} from "lucide-react";

import EligibilityCard from "./EligibilityCard";

const steps = [
  {
    title: "Diploma / B.Sc.",
    description:
      "Complete a recognized Diploma in Engineering or eligible B.Sc. degree.",
  },
  {
    title: "BCECE(LE) Registration",
    description:
      "Register through BCECEB for Lateral Entry counselling.",
  },
  {
    title: "Choice Filling",
    description:
      "Choose Katihar Engineering College and preferred branch.",
  },
  {
    title: "Seat Allotment",
    description:
      "Seats are allotted according to merit and reservation policy.",
  },
  {
    title: "Document Verification",
    description:
      "Verify all original certificates at the reporting centre.",
  },
  {
    title: "Admission",
    description:
      "Report to the institute and complete admission formalities.",
  },
];

export default function LateralEntry() {
  return (
    <section className="space-y-10">

      {/* Header */}

      <div className="ml-6">

        <div className="inline-flex items-center gap-3 rounded-full bg-green-50 px-5 py-2">

          <Workflow
            size={20}
            className="text-[rgb(14,110,74)]"
          />

          <span className="font-semibold text-[rgb(14,110,74)]">
            Direct Second Year Admission
          </span>

        </div>

        <h2 className="mt-5 text-3xl font-bold text-gray-900 lg:text-4xl">
          Lateral Entry Admission
        </h2>

        <p className="mt-4 max-w-4xl text-lg leading-8 text-gray-600">

          Katihar Engineering College provides admission
          directly into the second year (3rd Semester)
          of the B.Tech programme for eligible Diploma
          holders and other candidates meeting the
          prevailing Government of Bihar eligibility
          requirements.

        </p>

      </div>

      {/* Process */}

      <div className="rounded-3xl border border-green-100 bg-linear-to-br from-white to-green-50 p-8 shadow">

        <div className="flex items-center gap-3">

          <ArrowRight
            className="text-[rgb(14,110,74)]"
            size={26}
          />

          <h3 className="text-2xl font-bold">
            Admission Process
          </h3>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {steps.map((step, index) => (

            <div
              key={index}
              className="relative rounded-2xl border border-green-100 bg-white p-6 transition-all hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-[rgb(14,110,74)] text-white font-bold">

                {index + 1}

              </div>

              <h4 className="mt-5 text-lg font-semibold">

                {step.title}

              </h4>

              <p className="mt-3 leading-7 text-gray-600">

                {step.description}

              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Eligibility */}

      <div className="grid gap-8 lg:grid-cols-3">

        <EligibilityCard
          icon={GraduationCap}
          title="Eligibility"

          subtitle="Academic Qualification"

          items={[
            "3-Year AICTE Approved Diploma",
            "Relevant Engineering Discipline",
            "OR Eligible B.Sc. Degree (as per current norms)",
            "Meet BCECEB eligibility requirements",
          ]}
        />

        <EligibilityCard
          icon={ClipboardCheck}
          title="Counselling"

          subtitle="Admission Procedure"

          items={[
            "Register through BCECE(LE)",
            "Choice Filling",
            "Seat Allotment",
            "Document Verification",
            "Institute Reporting",
          ]}
        />

        <EligibilityCard
          icon={FileText}
          title="Required Documents"

          subtitle="Original Certificates"

          items={[
            "Diploma / B.Sc. Marksheet",
            "Provisional Certificate",
            "Migration Certificate",
            "Transfer Certificate",
            "Aadhar Card",
            "Passport Size Photographs",
            "Caste Certificate (if applicable)",
            "Income Certificate",
          ]}
        />

      </div>

      {/* Information Cards */}

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Left */}

        <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">

          <div className="flex items-center gap-3">

            <Building2
              size={28}
              className="text-[rgb(14,110,74)]"
            />

            <h3 className="text-2xl font-bold">
              Programme Highlights
            </h3>

          </div>

          <ul className="mt-8 space-y-5">

            {[
              "Direct admission to Second Year (3rd Semester).",
              "Continue alongside regular B.Tech students.",
              "Modern laboratories and workshops.",
              "Industry-oriented curriculum.",
              "Training & Placement assistance.",
            ].map((item) => (

              <li
                key={item}
                className="flex gap-3"
              >

                <BadgeCheck
                  size={18}
                  className="mt-1 shrink-0 text-[rgb(14,110,74)]"
                />

                <span className="leading-7 text-gray-700">

                  {item}

                </span>

              </li>

            ))}

          </ul>

        </div>

        {/* Right */}

        <div className="rounded-3xl bg-linear-to-br from-[rgb(14,110,74)] to-[rgb(20,145,98)] p-8 text-white shadow-lg">

          <h3 className="text-2xl font-bold">

            Why Choose KEC?

          </h3>

          <p className="mt-4 leading-8 text-green-50">

            Katihar Engineering College provides a
            student-centric learning environment,
            experienced faculty members, modern
            laboratories, digital classrooms,
            research opportunities and an active
            placement ecosystem to help students
            build successful engineering careers.

          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">

            <div className="rounded-xl bg-white/10 p-4">

              <h4 className="text-3xl font-bold">
                2016
              </h4>

              <p className="mt-1 text-green-100">
                Established
              </p>

            </div>

            <div className="rounded-xl bg-white/10 p-4">

              <h4 className="text-3xl font-bold">
                AICTE
              </h4>

              <p className="mt-1 text-green-100">
                Approved
              </p>

            </div>

            <div className="rounded-xl bg-white/10 p-4">

              <h4 className="text-3xl font-bold">
                BEU
              </h4>

              <p className="mt-1 text-green-100">
                Affiliated
              </p>

            </div>

            <div className="rounded-xl bg-white/10 p-4">

              <h4 className="text-3xl font-bold">
                DST
              </h4>

              <p className="mt-1 text-green-100">
                Govt. of Bihar
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}