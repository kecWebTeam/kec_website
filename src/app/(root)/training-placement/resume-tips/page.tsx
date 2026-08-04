import Link from "next/link";
import { FileUser, ExternalLink } from "lucide-react";

const resumeTips = [
  {
    title: "Contact Information",
    content:
      "Always include your full name, address, phone number, and professional email address. Ensure that your voicemail greeting and email ID are appropriate for recruiters.",
  },
  {
    title: "Objective",
    content:
      "Tailor your career objective to the specific job or internship you are applying for instead of using a generic statement.",
  },
  {
    title: "Education",
    content:
      "Keep this section concise and professional. Mention your degree, expected graduation year, institution name, city/state, and current CGPA. Avoid including high school details.",
  },
  {
    title: "Skills & Qualifications",
    content:
      "Highlight your technical skills, programming languages, software knowledge, certifications, strengths, and relevant qualifications that match the job description.",
  },
  {
    title: "Relevant Experience",
    content:
      "Include internships, projects, training, or work experience related to the position. Use 3–5 bullet points for each experience, begin every bullet with an action verb, and list experiences in reverse chronological order.",
  },
  {
    title: "Additional Experience",
    content:
      "Mention any other work experience, volunteering, leadership roles, or responsibilities that demonstrate transferable skills useful for the desired position.",
  },
  {
    title: "Memberships",
    content:
      "Include professional societies, student clubs, technical organizations, or memberships along with the duration of your involvement.",
  },
  {
    title: "References",
    content:
      "Provide references only if requested by the employer. Otherwise, simply mention 'Available upon request'.",
  },
  {
    title: "Quick Tips",
    content:
      "Proofread your resume carefully for spelling, grammar, formatting, consistency, and readability. Avoid generic templates, update your resume regularly, and customize it for every job application.",
  },
];

const ResumeTipsPage = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#094d33] via-[#0e6e4a] to-[#16a56f] px-8 py-7 shadow-lg">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative flex items-center justify-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
            <FileUser className="h-7 w-7 text-white" />
          </div>

          <h1 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Resume Tips
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 rounded-2xl border border-[#cfe6d8] bg-white p-8 shadow-sm">
        <div className="mb-10 text-center">
          <p className="text-lg font-semibold uppercase tracking-wide text-[#0e6e4a]">
            KEC Training & Placement Cell
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Resume Preparation Guidelines
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            A well-structured resume creates a strong first impression. Follow
            these guidelines to prepare a professional resume that effectively
            showcases your qualifications and skills.
          </p>
        <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-[#0e6e4a]/80 to-transparent" />
        </div>


        <div className="space-y-8">
          {resumeTips.map((tip, index) => (
            <div
              key={index}
              className="rounded-xl border border-[#cfe6d8] bg-[#f8fcfa] p-6"
            >
              <h3 className="text-xl font-semibold text-[#0e6e4a]">
                {tip.title}
              </h3>

              <p className="mt-3 text-lg leading-8 text-slate-700">
                {tip.content}
              </p>
            </div>
          ))}
        </div>

        {/* Resources */}
        <div className="mt-12 rounded-xl border border-[#cfe6d8] bg-[#f8fcfa] p-8">
          <h3 className="text-2xl font-bold text-[#0e6e4a]">
            Additional Resources
          </h3>

          <p className="mt-3 text-lg leading-8 text-slate-600">
            You can also refer to the following resources provided by the
            Training & Placement Cell.
          </p>

          <div className="mt-6 flex flex-col gap-4 md:flex-row">
            <Link
              href="/documents/sample.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0e6e4a] px-5 py-3 font-medium text-white transition hover:bg-[#0f8a5c]"
            >
              Sample Resume
              <ExternalLink className="h-4 w-4" />
            </Link>

            <Link
              href="/documents/tips.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#0e6e4a] px-5 py-3 font-medium text-[#0e6e4a] transition hover:bg-[#0e6e4a] hover:text-white"
            >
              Resume Tips PDF
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeTipsPage;
