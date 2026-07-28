import {
  GraduationCap,
  BookOpen,
  School,
  ArrowRight,
} from "lucide-react";

function getCurrentYear() {
    return new Date().getFullYear();
}
 

export default function AdmissionHero() {
  return (
    <section className="overflow-hidden rounded-[32px] bg-linear-to-br from-[rgb(14,110,74)] via-[rgb(18,130,88)] to-[rgb(12,88,60)] text-white shadow-2xl">

      <div className="relative px-6 py-14 sm:px-10 lg:px-16">

        {/* Decorative Circles */}

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5"></div>

        <div className="absolute right-10 bottom-0 h-52 w-52 rounded-full bg-white/5"></div>

        <div className="relative">

          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2 backdrop-blur">

            <GraduationCap size={20} />

            <span className="text-sm font-medium tracking-widest uppercase">
              Admissions {getCurrentYear()}
            </span>

          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Begin Your Engineering Journey
            <span className="block text-green-200">
              at Katihar Engineering College
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50">
            Katihar Engineering College offers undergraduate,
            lateral entry and postgraduate engineering
            programmes approved by AICTE and affiliated to
            Bihar Engineering University. Admissions are
            conducted through the Government of Bihar
            counselling process.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-[rgb(14,110,74)] shadow-lg transition hover:scale-105">

              Apply Now

              <ArrowRight size={18} />

            </button>

            <button className="rounded-xl border border-white/30 bg-white/10 px-6 py-4 font-semibold backdrop-blur transition hover:bg-white/20">

              Download Brochure

            </button>

          </div>

          {/* Stats */}

          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

              <BookOpen
                className="mb-4"
                size={32}
              />

              <h3 className="text-2xl lg:text-3xl font-bold">
                4 Years
              </h3>

              <p className="mt-1 text-green-100">
                B.Tech Programme
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

              <School
                className="mb-4"
                size={32}
              />

              <h3 className="text-2xl lg:text-3xl font-bold">
                UGEAC
              </h3>

              <p className="mt-1 text-green-100">
                JEE(Main) Based
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

              <GraduationCap
                className="mb-4"
                size={32}
              />

              <h3 className="text-2xl lg:text-3xl font-bold">
                Lateral
              </h3>

              <p className="mt-1 text-green-100">
                Direct 2nd Year
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

              <GraduationCap
                className="mb-4"
                size={32}
              />

              <h3 className="text-2xl lg:text-3xl font-bold">
                M.Tech
              </h3>

              <p className="mt-1 text-green-100">
                GATE / PGEAC
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}