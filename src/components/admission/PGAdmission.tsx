import {
  GraduationCap,
  Award,
  FileCheck,
  Workflow,
  BadgeCheck,
  Building2,
  BookOpen,
  IndianRupee,
} from "lucide-react";

import EligibilityCard from "./EligibilityCard";

const process = [
  {
    title: "Qualify GATE",
    desc: "Obtain a valid GATE score in the relevant engineering discipline.",
  },
  {
    title: "PGEAC Registration",
    desc: "Register for Post Graduate Engineering Admission Counselling conducted by BCECEB.",
  },
  {
    title: "Choice Filling",
    desc: "Select Katihar Engineering College and your preferred M.Tech specialization.",
  },
  {
    title: "Seat Allotment",
    desc: "Seats are allotted according to GATE merit, reservation policy and availability.",
  },
  {
    title: "Document Verification",
    desc: "Verify original documents at the reporting centre.",
  },
  {
    title: "Institute Reporting",
    desc: "Complete admission formalities and begin your postgraduate programme.",
  },
];

export default function PGAdmission() {
  return (
    <section className="space-y-12">

      {/* Header */}

      <div className="ml-6">

        <div className="inline-flex items-center gap-3 rounded-full bg-green-50 px-5 py-2">

          <GraduationCap
            size={20}
            className="text-[rgb(14,110,74)]"
          />

          <span className="font-semibold text-[rgb(14,110,74)]">
            Postgraduate Programme
          </span>

        </div>

        <h2 className="mt-5 text-3xl font-bold lg:text-4xl">
          M.Tech Admission
        </h2>

        <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-600">

          Katihar Engineering College offers postgraduate
          engineering education through the Government of Bihar
          admission process. Candidates with a valid GATE score
          may participate in PGEAC counselling conducted by
          BCECEB for admission into M.Tech programmes, subject
          to programme availability and the applicable
          admission notification.

        </p>

      </div>

      {/* Process */}

      <div className="rounded-3xl border border-green-100 bg-linear-to-br from-white to-green-50 p-8 shadow">

        <div className="flex items-center gap-3">

          <Workflow
            size={28}
            className="text-[rgb(14,110,74)]"
          />

          <h3 className="text-2xl font-bold">
            Admission Process
          </h3>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {process.map((step, index) => (

            <div
              key={index}
              className="relative rounded-2xl border border-green-100 bg-white p-6 transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-[rgb(14,110,74)] font-bold text-white">

                {index + 1}

              </div>

              <h4 className="mt-5 text-lg font-semibold">
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
          icon={GraduationCap}
          title="Eligibility"
          subtitle="Academic Qualification"
          items={[
            "B.E./B.Tech in relevant discipline",
            "Recognized University",
            "Valid GATE Score",
            "Meet PGEAC eligibility requirements",
          ]}
        />

        <EligibilityCard
          icon={FileCheck}
          title="Required Documents"
          subtitle="Original Certificates"
          items={[
            "B.Tech Degree / Provisional Certificate",
            "Semester Mark Sheets",
            "GATE Score Card",
            "Migration Certificate",
            "Transfer Certificate",
            "Identity Proof",
            "Category Certificate (if applicable)",
            "Passport Size Photographs",
          ]}
        />

        <EligibilityCard
          icon={Award}
          title="Programme Benefits"
          subtitle="Why pursue M.Tech?"
          items={[
            "Advanced Technical Knowledge",
            "Research Opportunities",
            "Industry Collaboration",
            "Higher Education & Ph.D. Pathway",
            "Enhanced Career Prospects",
          ]}
        />

      </div>

      {/* Scholarship + Highlights */}

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Scholarship */}

        <div className="rounded-3xl bg-linear-to-br from-[rgb(14,110,74)] to-[rgb(20,145,98)] p-8 text-white shadow-xl">

          <div className="flex items-center gap-3">

            <IndianRupee size={28} />

            <h3 className="text-2xl font-bold">
              Scholarships & Financial Support
            </h3>

          </div>

          <p className="mt-6 leading-8 text-green-50">

            GATE-qualified candidates may be eligible for
            financial assistance or scholarships subject to
            the prevailing AICTE, Government of India, and
            Government of Bihar regulations. Eligibility,
            availability, and disbursement are governed by the
            applicable rules in force during the admission
            year.

          </p>

          <div className="mt-8 rounded-2xl bg-white/10 p-5">

            <p className="font-semibold">
              ✔ Valid GATE Qualification
            </p>

            <p className="mt-2 font-semibold">
              ✔ Subject to AICTE / Government Guidelines
            </p>

            <p className="mt-2 font-semibold">
              ✔ As notified during the admission cycle
            </p>

          </div>

        </div>

        {/* Highlights */}

        <div className="rounded-3xl border border-green-100 bg-white p-8 shadow">

          <div className="flex items-center gap-3">

            <Building2
              size={28}
              className="text-[rgb(14,110,74)]"
            />

            <h3 className="text-2xl font-bold">
              Programme Highlights
            </h3>

          </div>

          <div className="mt-8 space-y-5">

            {[
              "Experienced Faculty Members",
              "Research-Oriented Learning",
              "Modern Laboratories",
              "Industry Interaction",
              "Seminars & Workshops",
              "Project-Based Curriculum",
              "Career Guidance",
              "Innovation & Entrepreneurship",
            ].map((item) => (

              <div
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

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Notice */}

      <div className="rounded-3xl border-l-4 border-[rgb(14,110,74)] bg-green-50 p-8">

        <div className="flex items-start gap-4">

          <BookOpen
            className="mt-1 text-[rgb(14,110,74)]"
            size={26}
          />

          <div>

            <h3 className="text-xl font-bold">
              Important Note
            </h3>

            <p className="mt-3 leading-8 text-gray-700">

              M.Tech admissions are offered only when the
              respective programme is available and notified by
              the competent authorities. Candidates should
              regularly check the official BCECEB, BEU, and
              Katihar Engineering College websites for the
              latest admission notifications, eligibility
              criteria, counselling schedules, and seat matrix.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}