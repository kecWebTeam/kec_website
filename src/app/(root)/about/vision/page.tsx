import { Target } from "lucide-react";

const VisionPage = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      {/* Page Heading */}
      {/* Hero */}
      <div className="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-r from-[#094d33] via-[#0e6e4a] to-[#16a56f] px-8 py-7 shadow-lg">
        {/* Background Decoration */}
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative flex items-center justify-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
            <Target className="h-7 w-7 text-white" />
          </div>

          <h1 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Vision & Mission
          </h1>
        </div>
      </div>

      {/* Vision */}
      <div className="mb-10 rounded-2xl border border-[#cfe6d8] bg-white p-8 shadow-sm">
        <h2 className="mb-5 text-2xl font-bold text-[#0e6e4a]">Vision</h2>

        <p className="text-lg leading-8 text-gray-700">
          To establish an exclusive profile as a premier global technical
          institute which nurtures proficient technical professionals and
          resources, and consequently, drives the economic and social
          development of the nation and region.
        </p>
      </div>

      {/* Mission */}
      <div className="rounded-2xl border border-[#cfe6d8] bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-2xl font-bold text-[#0e6e4a]">Mission</h2>

        <ul className="space-y-5">
          <li className="flex items-start gap-4">
            <div className="mt-2 h-3 w-3 rounded-full bg-[#0e6e4a]" />

            <p className="text-lg leading-8 text-gray-700">
              To promote academic excellence in technical education with
              enhanced teaching-learning practices.
            </p>
          </li>

          <li className="flex items-start gap-4">
            <div className="mt-2 h-3 w-3 rounded-full bg-[#0e6e4a]" />

            <p className="text-lg leading-8 text-gray-700">
              To cultivate an atmosphere of research and lead in technological
              advancement through collaboration with industry and academia.
            </p>
          </li>

          <li className="flex items-start gap-4">
            <div className="mt-2 h-3 w-3 rounded-full bg-[#0e6e4a]" />

            <p className="text-lg leading-8 text-gray-700">
              To create ethically-sound future leaders who lead the inclusive
              and sustainable development of the state, nation, and society at
              large.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default VisionPage;
