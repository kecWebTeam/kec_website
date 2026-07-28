import {
  GraduationCap,
  Workflow,
  Award,
  ArrowRight,
} from "lucide-react";

const timelines = [
  {
    title: "Undergraduate (B.Tech)",
    icon: GraduationCap,
    color: "from-[rgb(14,110,74)] to-[rgb(20,145,98)]",
    steps: [
      "JEE (Main)",
      "UGEAC Registration",
      "Choice Filling",
      "Seat Allotment",
      "Document Verification",
      "Institute Reporting",
    ],
  },
  {
    title: "Lateral Entry",
    icon: Workflow,
    color: "from-[rgb(25,135,84)] to-[rgb(14,110,74)]",
    steps: [
      "Diploma / B.Sc.",
      "BCECE(LE)",
      "Choice Filling",
      "Seat Allotment",
      "Verification",
      "Admission",
    ],
  },
  {
    title: "M.Tech Admission",
    icon: Award,
    color: "from-[rgb(20,145,98)] to-[rgb(10,90,60)]",
    steps: [
      "GATE",
      "PGEAC Registration",
      "Choice Filling",
      "Seat Allotment",
      "Verification",
      "Reporting",
    ],
  },
];

export default function AdmissionTimeline() {
  return (
    <section className="space-y-10">

      {/* Heading */}

      <div className="ml-6">

        <span className="rounded-full bg-green-50 px-5 py-2 text-sm font-semibold text-[rgb(14,110,74)]">
          Admission Journey
        </span>

        <h2 className="mt-5 text-3xl font-bold lg:text-4xl">
          Admission Timeline
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
          Follow these simple steps to begin your academic
          journey at Katihar Engineering College.
        </p>

      </div>

      {/* Timeline Cards */}

      <div className="grid gap-8 xl:grid-cols-3">

        {timelines.map((timeline, index) => {

          const Icon = timeline.icon;

          return (

            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-green-100 bg-white shadow transition hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Header */}

              <div
                className={`bg-linear-to-r ${timeline.color} p-6 text-white`}
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">

                    <Icon size={28} />

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      {timeline.title}
                    </h3>

                    <p className="text-green-100">
                      Admission Process
                    </p>

                  </div>

                </div>

              </div>

              {/* Steps */}

              <div className="p-8">

                {timeline.steps.map((step, i) => (

                  <div
                    key={i}
                    className="flex"
                  >

                    {/* Left */}

                    <div className="mr-5 flex flex-col items-center">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgb(14,110,74)] text-sm font-bold text-white">

                        {i + 1}

                      </div>

                      {i !== timeline.steps.length - 1 && (
                        <div className="my-2 h-12 w-0.75 rounded-full bg-green-200" />
                      )}

                    </div>

                    {/* Right */}

                    <div className="pb-8">

                      <h4 className="text-lg font-semibold">
                        {step}
                      </h4>

                      <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">

                        <ArrowRight size={14} />

                        <span>
                          Complete this stage to proceed.
                        </span>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          );

        })}

      </div>

      {/* Important Notice */}

      <div className="rounded-3xl border border-green-100 bg-linear-to-r from-green-50 to-white p-8 shadow-sm">

        <h3 className="text-2xl font-bold text-gray-800">
          Important Information
        </h3>

        <div className="mt-6 grid gap-5 md:grid-cols-2">

          {[
            "Admission schedules are notified by BCECEB every academic session.",
            "Candidates should regularly check official counselling notifications.",
            "Original documents are mandatory during reporting.",
            "Seat allotment is based on merit, reservation policy and seat availability.",
          ].map((item) => (

            <div
              key={item}
              className="flex items-start gap-3"
            >

              <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[rgb(14,110,74)]" />

              <p className="leading-7 text-gray-700">

                {item}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}