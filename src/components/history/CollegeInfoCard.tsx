import Image from "next/image";

import PrincipalList from "./PrincipalList";
import InfoRow from "./InfoRow";

import {
  Globe,
  School,
  Calendar,
  MapPin,
  GraduationCap,
  Landmark,
  BookOpen,
} from "lucide-react";
import Logo from "../header/Logo";

export default function CollegeInfoCard() {
  return (
    <div className="bg-white rounded-3xl border shadow-lg overflow-hidden">

      {/* Header */}

      <div className="p-8 bg-gradient-to-br from-white to-green-50">

        <div className="flex flex-col items-center">

          <Logo />
        </div>
      </div>

      <div className="p-6">

        <PrincipalList />

        <div className="mt-8">

          <InfoRow
            icon={BookOpen}
            title="Motto"
            value={
              <i>yogah karmasu kaushalam</i>
            }
          />

          <InfoRow
            icon={GraduationCap}
            title="Motto in English"
            value="Excellence in Action"
          />

          <InfoRow
            icon={School}
            title="Students"
            value="720"
          />

          <InfoRow
            icon={Calendar}
            title="Established"
            value="2016"
          />

          <InfoRow
            icon={Landmark}
            title="Affiliations"
            value="BEU, AKU, AICTE"
          />

          <InfoRow
            icon={Globe}
            title="Website"
            value={
              <a
                href="https://keck.ac.in"
                className="text-[rgb(14,110,74)] hover:underline"
              >
                keck.ac.in
              </a>
            }
          />

          <InfoRow
            icon={MapPin}
            title="Location"
            value="Hajipur, Katihar"
          />

        </div>

      </div>
    </div>
  );
}