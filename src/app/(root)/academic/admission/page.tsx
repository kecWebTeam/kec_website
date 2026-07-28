import AdmissionHero from "@/components/admission/AdmissionHero";
import UGAdmission from "@/components/admission/UGAdmisson";
import LateralEntry from "@/components/admission/LateralEntry";
import PGAdmission from "@/components/admission/PGAdmission";
import CourseTable from "@/components/admission/CourseTable";
import AdmissionTimeline from "@/components/admission/AdmissionTimeline";
import AdmissionNotice from "@/components/admission/AdmissionNotice";

export default function AdmissionPage() {
  return (
    <main className="space-y-16 lg:space-y-24">

      {/* Hero */}

      <AdmissionHero />

      {/* Undergraduate Admission */}

      <section
        id="ug-admission"
        className="scroll-mt-28"
      >
        <UGAdmission />
      </section>

      {/* Divider */}

      <div className="flex justify-center">

        <div className="h-1 w-40 rounded-full bg-gradient-to-r from-transparent via-[rgb(14,110,74)] to-transparent" />

      </div>

      {/* Lateral Entry */}

      <section
        id="lateral-entry"
        className="scroll-mt-28"
      >
        <LateralEntry />
      </section>

      {/* Divider */}

      <div className="flex justify-center">

        <div className="h-1 w-40 rounded-full bg-gradient-to-r from-transparent via-[rgb(14,110,74)] to-transparent" />

      </div>

      {/* PG */}

      <section
        id="pg-admission"
        className="scroll-mt-28"
      >
        <PGAdmission />
      </section>

      {/* Divider */}

      <div className="flex justify-center">

        <div className="h-1 w-40 rounded-full bg-gradient-to-r from-transparent via-[rgb(14,110,74)] to-transparent" />

      </div>

      {/* Courses */}

      <section
        id="courses"
        className="scroll-mt-28"
      >
        <CourseTable />
      </section>

      {/* Timeline */}

      <section
        id="timeline"
        className="scroll-mt-28"
      >
        <AdmissionTimeline />
      </section>

      {/* Notice */}

      <section
        id="notice"
        className="scroll-mt-28"
      >
        <AdmissionNotice />
      </section>

    </main>
  );
}