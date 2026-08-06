
import {
  BookOpen,
  CheckCircle2,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FacilityDescriptionProps {
  title: string;
  description: string;
  highlights: string[];
}

export default function FacilityDescription({
  title,
  description,
  highlights,
}: FacilityDescriptionProps) {
  return (
    <section className="mt-16">

      <div className="grid gap-8 lg:grid-cols-3">

        {/* LEFT */}

        <Card className="overflow-hidden rounded-3xl border-green-100 shadow-md lg:col-span-2">

          <div className="h-full p-8 lg:p-10">

            <Badge className="bg-[rgb(14,110,74)] hover:bg-[rgb(14,110,74)]">

              About Facility

            </Badge>

            <h2 className="mt-6 text-3xl font-bold text-gray-900">

              {title}

            </h2>

            <div className="mt-8 space-y-6">

              {description
                .split("\n")
                .filter(Boolean)
                .map((paragraph, index) => (
                  <p
                    key={index}
                    className="leading-8 text-gray-600 text-[17px]"
                  >
                    {paragraph}
                  </p>
                ))}

            </div>

          </div>

        </Card>

        {/* RIGHT */}

        <Card className="rounded-3xl border-green-100 bg-linear-to-br from-[rgb(14,110,74)] to-[rgb(20,145,98)] text-white shadow-lg">

          <div className="p-8">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">

              <BookOpen size={34} />

            </div>

            <h3 className="mt-6 text-2xl font-bold">

              Key Highlights

            </h3>

            <p className="mt-2 text-green-100">

              Everything students can access through this
              facility.

            </p>

            <div className="mt-8 space-y-4">

              {highlights.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-white/10 p-4 backdrop-blur"
                >

                  <CheckCircle2
                    className="mt-1 shrink-0"
                    size={18}
                  />

                  <p className="leading-7">

                    {item}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </Card>

      </div>

    </section>
  );
}