import Link from "next/link";
import { BookOpen, Download, ExternalLink, FileText } from "lucide-react";

const BROCHURE_PATH = "/documents/placement_brochure.pdf";

const PlacementBrochurePage = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#094d33] via-[#0e6e4a] to-[#16a56f] px-8 py-7 shadow-lg">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative flex items-center justify-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
            <BookOpen className="h-7 w-7 text-white" />
          </div>

          <h1 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Placement Brochure
          </h1>
        </div>
      </div>

      {/* Information Card */}
      <div className="mt-10 rounded-2xl border border-[#cfe6d8] bg-white p-8 shadow-sm">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-[#0e6e4a]" />

              <h2 className="text-2xl font-bold text-[#0e6e4a]">
                Placement Brochure
              </h2>
            </div>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Explore the official Placement Brochure of Katihar Engineering
              College to learn about our academic excellence, placement
              statistics, recruiters, internship opportunities, infrastructure,
              and student achievements.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={BROCHURE_PATH}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-[#0e6e4a] px-5 py-3 font-medium text-white transition hover:bg-[#0f8a5c] hover:shadow-lg"
            >
              <Download className="h-5 w-5" />
              Download PDF
            </Link>

            <Link
              href={BROCHURE_PATH}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border border-[#0e6e4a] px-5 py-3 font-medium text-[#0e6e4a] transition hover:bg-[#0e6e4a] hover:text-white"
            >
              <ExternalLink className="h-5 w-5" />
              Open Full Screen
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-12">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0e6e4a]/30 to-transparent" />
      </div>

      {/* PDF Preview */}
      <div className="overflow-hidden rounded-2xl border border-[#cfe6d8] bg-white shadow-sm">
        <div className="border-b border-[#cfe6d8] bg-[#f8fcfa] px-6 py-4">
          <h3 className="text-xl font-semibold text-[#0e6e4a]">
            Preview Placement Brochure
          </h3>

          <p className="mt-2 text-slate-600">
            You can preview the brochure below or open it in full screen for a
            better reading experience.
          </p>
        </div>
        <iframe
          src="/documents/placement_brochure.pdf#toolbar=0&navpanes=0&scrollbar=0"
          className="h-[700px] w-full"
          title="Placement Brochure"
        />
      </div>
    </section>
  );
};

export default PlacementBrochurePage;
