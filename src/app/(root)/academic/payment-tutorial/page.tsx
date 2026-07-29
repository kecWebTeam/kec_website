"use client";

import Link from "next/link";
import { CreditCard, Download, ExternalLink, CheckCircle2 } from "lucide-react";

const steps = [
  "Open any browser.",

  'Go to the link https://onlinesbi.sbi.bank.in/sbicollect/. A page of "Terms" will be opened.',

  "Tick the checkbox (acceptance of terms and conditions) and click on Proceed. A new page will open.",

  "Select your State of Corporate/Institution (i.e., Bihar) and Type of Corporate/Institution (i.e., Educational Institutions), then click on Go. A new page will open.",

  "Select your Educational Institutions Name (i.e., Katihar Engineering College) and Submit. A new page will open with the logo of Katihar Engineering College.",

  "Select Payment Category (i.e., either Fees or Fine depending upon what you are paying for).",

  "Enter your details: Your Name, Registration No., Branch, Category, Email ID, Year/Semester, and Fees (corresponding to the fee column).",

  "Enter your Name, Date of Birth/Incorporation, Mobile No., Email ID, and the text shown in the image for banking, then Submit.",

  "A page with the details you entered will appear. Check the details carefully, and if correct, Submit.",

  "A page with several payment modes will open. Select the payment mode you prefer and complete the payment.",

  "After completing the payment, you can download the e-Receipt of payment.",
];

const PaymentTutorialPage = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#094d33] via-[#0e6e4a] to-[#16a56f] px-8 py-7 shadow-lg">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative flex items-center justify-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
            <CreditCard className="h-7 w-7 text-white" />
          </div>

          <h1 className="text-center text-3xl font-bold text-white md:text-4xl">
            Fee Payment Tutorial
          </h1>
        </div>
      </div>

      {/* Payment Card */}
      <div className="mt-10 rounded-2xl border border-[#cfe6d8] bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#0e6e4a]">
          Fee Payment (Through SBI COLLECT)
        </h2>

        <p className="mt-3 text-base leading-7 text-slate-600">
          Follow the steps below to complete your fee payment securely through
          the SBI COLLECT portal.
        </p>

        {/* SBI Button */}
        <div className="mt-6">
          <Link
            href="https://onlinesbi.sbi.bank.in/sbicollect/"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0e6e4a] px-5 py-3 font-medium text-white transition hover:bg-[#0f8a5c] hover:shadow-lg"
          >
            Visit SBI COLLECT
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
       <div className="my-12">
  <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0e6e4a]/40 to-transparent" />
</div>

        {/* Steps */}
        <div className="mt-12">
          <h2 className="mb-10 text-3xl font-bold text-[#0e6e4a]">
            Steps to be Followed for Fee Payment
          </h2>

          <div className="relative ml-5 border-l-2 border-[#0e6e4a]/20">
            {steps.map((step, index) => (
              <div key={index} className="relative pb-14 pl-10 last:pb-0">
                {/* Step Number */}
                <div className="absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#0e6e4a] to-[#16a56f] text-sm font-bold text-white shadow-md">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold text-[#0e6e4a]">
                  Step {index + 1}
                </h3>

                {index === 1 ? (
                  <p className="mt-2 text-lg leading-8 text-slate-700">
                    Go to{" "}
                    <Link
                      href="https://onlinesbi.sbi.bank.in/sbicollect/"
                      target="_blank"
                      className="font-semibold text-[#0e6e4a] underline decoration-2 underline-offset-4 transition hover:text-[#0f8a5c]"
                    >
                      https://onlinesbi.sbi.bank.in/sbicollect/
                    </Link>
                    . A page of <strong>Terms & Conditions</strong> will open.
                  </p>
                ) : (
                  <p className="mt-2 text-lg leading-8 text-slate-700">
                    {step}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* PDF Download */}
        <div className="mt-12 rounded-xl border border-[#cfe6d8] bg-[#f8fcfa] p-6">
          <h3 className="text-xl font-semibold text-[#0e6e4a]">
            Download Step-by-Step PDF
          </h3>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Or you can also download the PDF containing screenshots of the steps
            for fee payment.
          </p>

          <Link
            href="#" // Replace with the actual PDF link
            target="_blank"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0e6e4a] px-5 py-3 font-medium text-white transition-all hover:bg-[#0f8a5c] hover:shadow-lg"
          >
            <Download className="h-5 w-5" />
            Click here to download
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PaymentTutorialPage;
