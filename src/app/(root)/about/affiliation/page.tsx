import {
  GraduationCap,
  Building2,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

export default function Affiliation() {
  return (
    <section className="m-2">

      <div className="overflow-hidden rounded-[32px] border border-green-100 bg-white shadow-xl">

        {/* Header */}

        <div className="bg-linear-to-r from-[rgb(14,110,74)] to-[rgb(20,145,98)] px-6 py-8 text-white sm:px-10">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur">

              <GraduationCap size={30} />

            </div>

            <div>

              <p className="uppercase tracking-[4px] text-sm text-white/80">
                Academic Information
              </p>

              <h1 className="text-3xl sm:text-4xl font-bold">
                Affiliation
              </h1>

            </div>

          </div>

        </div>

        {/* Body */}

        <div className="space-y-8 p-6 sm:p-10">

          {/* Description */}

          <div className="rounded-3xl border border-green-100 bg-green-50 p-8">

            <p className="text-lg leading-9 text-gray-700">

              The Institute is academically governed by{" "}

              <span className="font-semibold text-[rgb(14,110,74)]">
                Bihar Engineering University (BEU), Patna
              </span>

              , the degree-awarding authority for the B.Tech.
              programme. The institute is recognized by the

              <span className="font-semibold">
                {" "}All India Council for Technical Education (AICTE)
              </span>

              {" "}and functions under the

              <span className="font-semibold">
                {" "}Department of Science & Technology,
                Government of Bihar.
              </span>

            </p>

          </div>

          {/* Cards */}

          <div className="grid gap-6 md:grid-cols-3">

            {/* BEU */}

            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[rgb(14,110,74)]/10">

                <Building2
                  size={28}
                  className="text-[rgb(14,110,74)]"
                />

              </div>

              <h3 className="text-xl font-bold text-gray-800">
                Bihar Engineering University
              </h3>

              <p className="mt-2 text-gray-500">
                Degree Awarding Authority
              </p>

              <a
                href="https://beu-bih.ac.in/"
                target="_blank"
                className="mt-5 inline-flex items-center gap-2 text-[rgb(14,110,74)] font-semibold hover:underline"
              >
                Visit Website
                <ExternalLink size={18} />
              </a>

            </div>

            {/* AICTE */}

            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[rgb(14,110,74)]/10">

                <ShieldCheck
                  size={28}
                  className="text-[rgb(14,110,74)]"
                />

              </div>

              <h3 className="text-xl font-bold text-gray-800">
                AICTE
              </h3>

              <p className="mt-2 text-gray-500">
                National Technical Education Regulator
              </p>

              <a
                href="https://www.aicte-india.org"
                target="_blank"
                className="mt-5 inline-flex items-center gap-2 text-[rgb(14,110,74)] font-semibold hover:underline"
              >
                Visit Website
                <ExternalLink size={18} />
              </a>

            </div>

            {/* DST */}

            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[rgb(14,110,74)]/10">

                <GraduationCap
                  size={28}
                  className="text-[rgb(14,110,74)]"
                />

              </div>

              <h3 className="text-xl font-bold text-gray-800">
                Govt. of Bihar
              </h3>

              <p className="mt-2 text-gray-500">
                Department of Science & Technology
              </p>

            </div>

          </div>

          {/* Bottom Note */}

          <div className="rounded-3xl border-l-[6px] border-[rgb(14,110,74)] bg-green-50 p-6">

            <p className="leading-8 text-gray-700">

              The affiliation and approvals ensure that all
              academic programmes offered by Katihar
              Engineering College conform to national standards
              of technical education and maintain academic
              excellence.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}