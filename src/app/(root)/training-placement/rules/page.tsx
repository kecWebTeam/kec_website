import { ClipboardList } from "lucide-react";

const RulesTrainingPlacementPage = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#094d33] via-[#0e6e4a] to-[#16a56f] px-8 py-7 shadow-lg">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative flex items-center justify-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
            <ClipboardList className="h-7 w-7 text-white" />
          </div>

          <h1 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Rules of Training &amp; Placement
          </h1>
        </div>
      </div>

      {/* PDF Preview */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-[#cfe6d8] bg-white shadow-sm">
        <div className="border-b border-[#cfe6d8] bg-[#f8fcfa] px-6 py-5">
          <h2 className="text-2xl font-bold text-[#0e6e4a]">
            Training &amp; Placement Rules
          </h2>

          <p className="mt-2 text-base leading-7 text-slate-600">
            Please read the official Training &amp; Placement rules and
            guidelines carefully before participating in placement activities.
          </p>
        </div>

        <iframe
          src="/documents/sample.pdf#toolbar=0&navpanes=0&scrollbar=0"
          title="Rules of Training & Placement"
          className="h-[1000px] w-full"
        />
      </div>
    </section>
  );
};

export default RulesTrainingPlacementPage;
