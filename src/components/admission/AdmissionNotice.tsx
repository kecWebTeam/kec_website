import {
  Info,
  FileText,
  Phone,
  Mail,
  Globe,
  CircleHelp,
  ExternalLink,
} from "lucide-react";

const faqs = [
  {
    question: "How are admissions conducted?",
    answer:
      "Admissions to the B.Tech programme are carried out through UGEAC counselling conducted by BCECEB based on valid JEE(Main) scores.",
  },
  {
    question: "Can diploma holders apply?",
    answer:
      "Yes. Eligible diploma holders can apply for direct second-year admission through the BCECE(LE) counselling process.",
  },
  {
    question: "Is GATE mandatory for M.Tech admission?",
    answer:
      "Candidates with a valid GATE score may participate in PGEAC counselling. The applicable eligibility criteria and admission process are governed by the current admission notification.",
  },
  {
    question: "Where can I check admission notifications?",
    answer:
      "Candidates should regularly visit the official BCECEB, Bihar Engineering University (BEU), and Katihar Engineering College websites for the latest notifications.",
  },
];

export default function AdmissionNotice() {
  return (
    <section className="space-y-10">

      {/* Heading */}

      <div className="ml-6">

        <span className="rounded-full bg-green-50 px-5 py-2 text-sm font-semibold text-[rgb(14,110,74)]">
          Admission Support
        </span>

        <h2 className="mt-5 text-3xl font-bold lg:text-4xl">
          Need Help?
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
          Please read the important instructions carefully
          before participating in the counselling process.
        </p>

      </div>

      {/* Notice */}

      <div className="rounded-3xl border-l-4 border-[rgb(14,110,74)] bg-green-50 p-8">

        <div className="flex gap-4">

          <Info
            size={30}
            className="mt-1 shrink-0 text-[rgb(14,110,74)]"
          />

          <div>

            <h3 className="text-2xl font-bold">
              Important Instructions
            </h3>

            <ul className="mt-5 space-y-4">

              {[
                "Admission is subject to Government of Bihar, AICTE and BEU regulations.",
                "Candidates must produce original documents during reporting.",
                "Reservation policy is applicable as per Government norms.",
                "Seat allotment depends on merit, category and availability.",
                "Candidates are advised to regularly check official counselling notifications.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3"
                >
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[rgb(14,110,74)]" />
                  <span className="leading-7 text-gray-700">
                    {item}
                  </span>
                </li>
              ))}

            </ul>

          </div>

        </div>

      </div>

      {/* FAQ */}

      <div className="grid gap-6 lg:grid-cols-2">

        {faqs.map((faq) => (

          <div
            key={faq.question}
            className="rounded-3xl border border-green-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
          >

            <div className="flex items-center gap-3">

              <CircleHelp
                size={24}
                className="text-[rgb(14,110,74)]"
              />

              <h3 className="text-xl font-semibold">
                {faq.question}
              </h3>

            </div>

            <p className="mt-5 leading-8 text-gray-600">
              {faq.answer}
            </p>

          </div>

        ))}

      </div>

      {/* Contact */}

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Left */}

        <div className="rounded-3xl bg-linear-to-br from-[rgb(14,110,74)] to-[rgb(20,145,98)] p-8 text-white shadow-xl">

          <h3 className="text-2xl font-bold">
            Admission Help Desk
          </h3>

          <p className="mt-4 leading-8 text-green-100">
            Contact the admission office during working
            hours for admission-related assistance.
          </p>

          <div className="mt-8 space-y-5">

            <div className="flex gap-4">

              <Phone className="shrink-0" />

              <span>+91 6452-239122</span>

            </div>

            <div className="flex gap-4">

              <Mail className="shrink-0" />

              <span>admission@keck.ac.in</span>

            </div>

            <div className="flex gap-4">

              <Globe className="shrink-0" />

              <span>www.keck.ac.in</span>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="rounded-3xl border border-green-100 bg-white p-8 shadow">

          <div className="flex items-center gap-3">

            <FileText
              className="text-[rgb(14,110,74)]"
              size={26}
            />

            <h3 className="text-2xl font-bold">
              Useful Links
            </h3>

          </div>

          <div className="mt-8 space-y-5">

            {[
              "BCECEB Counselling Portal",
              "JEE(Main)",
              "AICTE",
              "Bihar Engineering University",
              "Katihar Engineering College",
            ].map((item) => (

              <button
                key={item}
                className="flex w-full items-center justify-between rounded-2xl border border-green-100 p-4 text-left transition hover:bg-green-50"
              >

                <span>{item}</span>

                <ExternalLink
                  size={18}
                  className="text-[rgb(14,110,74)]"
                />

              </button>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}