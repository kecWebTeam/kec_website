import Image from "next/image";
import { GraduationCap } from "lucide-react";

export default function PrincipalProfile() {
  return (
    <div className="flex flex-col items-center">

      {/* Profile */}

      <div className="relative group">

        {/* Outer Ring */}

        <div className="absolute -inset-3 rounded-full border-[3px] border-[rgb(14,110,74)] border-dashed animate-spin animation-duration-[20s]" />

        {/* Second Ring */}

        <div className="absolute -inset-1 rounded-full border-4 border-[rgb(14,110,74)]/25" />

        {/* Image */}

        <div className="relative h-72 w-72 rounded-full overflow-hidden border-[6px] border-white shadow-2xl">

          <Image
            src="/brand/principal.png"
            alt="Principal"
            fill
            priority
            loading="eager"
            sizes="(max-width: 768px) 280px, 288px"
            className="object-cover transition duration-500 group-hover:scale-110"
          />

        </div>

        {/* Floating Badge */}

        <div className="absolute bottom-2 right-0 h-16 w-16 rounded-full bg-[rgb(14,110,74)] text-white shadow-xl flex items-center justify-center">

          <GraduationCap size={30} />

        </div>

      </div>

      {/* Name */}

      <div className="mt-10 text-center">

        <h2 className="text-3xl font-bold text-gray-800">
          Smt. Ranjana Kumari
        </h2>

        <p className="mt-2 text-[rgb(14,110,74)] font-semibold tracking-wide uppercase">
          Principal
        </p>

        <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[rgb(14,110,74)]"></div>

      </div>

      {/* Small Info Card */}

      <div className="mt-10 w-full rounded-3xl border border-green-100 bg-linear-to-br from-green-50 to-white p-6 shadow-sm">

        <div className="space-y-5">

          <div className="flex justify-between">

            <span className="text-gray-500">
              Designation
            </span>

            <span className="font-semibold">
              Principal
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-500">
              College
            </span>

            <span className="font-semibold text-right">
              Katihar Engineering College
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-500">
              Since
            </span>

            <span className="font-semibold">
              2018
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}