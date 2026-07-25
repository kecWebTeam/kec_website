import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  BadgeCheck,
} from "lucide-react";

export default function SignatureCard() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-linear-to-r from-[rgb(14,110,74)] to-[rgb(20,145,98)] p-px">

      <div className="rounded-3xl bg-white px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT */}

          <div className="flex flex-col justify-center">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgb(14,110,74)]/10">
                <BadgeCheck
                  className="text-[rgb(14,110,74)]"
                  size={22}
                />
              </div>

              <span className="text-xs sm:text-sm uppercase tracking-[2px] sm:tracking-[4px] text-[rgb(14,110,74)] font-semibold">
                Best Wishes
              </span>

            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-800">
              Smt. Ranjana Kumari
            </h2>

            <p className="mt-2 text-base sm:text-lg font-semibold text-[rgb(14,110,74)]">
              Principal
            </p>

            {/* Signature */}

            <div className="mt-8">

              <h3
                className="text-3xl sm:text-5xl italic wrap-break-word"
                style={{
                  fontFamily: "cursive",
                }}
              >
                Ranjana Kumari
              </h3>

              <div className="mt-3 h-0.5 w-40 sm:w-52 rounded-full bg-[rgb(14,110,74)]"></div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="rounded-3xl border border-green-100 bg-green-50 p-5 sm:p-7">

            <div className="space-y-6">

              {/* Item */}

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow">
                  <GraduationCap
                    size={20}
                    className="text-[rgb(14,110,74)]"
                  />
                </div>

                <div className="min-w-0">

                  <p className="text-sm text-gray-500">
                    Designation
                  </p>

                  <h3 className="font-semibold">
                    Principal
                  </h3>

                </div>

              </div>

              {/* Email */}

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow">
                  <Mail
                    size={20}
                    className="text-[rgb(14,110,74)]"
                  />
                </div>

                <div className="min-w-0">

                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <a
                    href="mailto:principal@keck.ac.in"
                    className="break-all font-medium hover:text-[rgb(14,110,74)]"
                  >
                    principal@keck.ac.in
                  </a>

                </div>

              </div>

              {/* Phone */}

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow">
                  <Phone
                    size={20}
                    className="text-[rgb(14,110,74)]"
                  />
                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Contact
                  </p>

                  <h3 className="font-medium">
                    +91 64522 39122
                  </h3>

                </div>

              </div>

              {/* Address */}

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow">
                  <MapPin
                    size={20}
                    className="text-[rgb(14,110,74)]"
                  />
                </div>

                <div className="min-w-0">

                  <p className="text-sm text-gray-500">
                    Address
                  </p>

                  <p className="font-medium leading-6">
                    Katihar Engineering College,
                    <br />
                    Katihar, Bihar
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}