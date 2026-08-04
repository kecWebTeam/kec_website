import { BriefcaseBusiness } from "lucide-react";

const AboutPlacementPage = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#094d33] via-[#0e6e4a] to-[#16a56f] px-8 py-7 shadow-lg">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative flex items-center justify-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
            <BriefcaseBusiness className="h-7 w-7 text-white" />
          </div>

          <h1 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            About Training & Placement Cell
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 rounded-2xl border border-[#cfe6d8] bg-white p-8 shadow-sm">
        <div className="space-y-8">
          {/* About */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-[#0e6e4a]">
              About T&amp;P Cell
            </h2>

            <p className="text-lg leading-8 text-slate-700">
              The Training and Placement Office provides job opportunities and
              organizes campus interviews with companies of national and
              international repute. Students rely on the office for training,
              internships, and employment opportunities. It also fulfills
              instructional and industrial requirements by leveraging
              state-of-the-art facilities, emerging technologies, and skilled
              human resources in collaboration with all academic departments.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0e6e4a]/30 to-transparent" />

          {/* Mission */}
          <div>
            <h2 className="mb-5 text-2xl font-bold text-[#0e6e4a]">
              Our Mission
            </h2>

            <p className="text-lg leading-8 text-slate-700">
              The Training &amp; Placement Cell is committed to preparing
              students for rewarding careers in engineering and technology. It
              conducts training programs that develop technical expertise,
              professional skills, and corporate readiness, enabling students to
              become industry-ready professionals.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              We continuously strengthen the relationship between industry and
              the institute by facilitating campus placements, internship
              opportunities, industrial visits, on-site training, expert
              lectures, workshops, seminars, and other collaborative
              initiatives. Our goal is to bridge the gap between academics and
              industry while enhancing students' employability and professional
              growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPlacementPage;
