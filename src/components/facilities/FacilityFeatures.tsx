
import { LucideIcon, CheckCircle2 } from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FacilityFeaturesProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
}

export default function FacilityFeatures({
  title = "Facilities & Services",
  subtitle = "Everything available for students under this facility.",
  features,
}: FacilityFeaturesProps) {
  return (
    <section className="mt-20">

      {/* Heading */}

      <div className="mb-10">

        <Badge className="bg-[rgb(14,110,74)] hover:bg-[rgb(14,110,74)]">
          Features
        </Badge>

        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          {title}
        </h2>

        <p className="mt-3 max-w-3xl text-lg leading-8 text-gray-600">
          {subtitle}
        </p>

      </div>

      {/* Feature Cards */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

        {features.map((feature) => {

          const Icon = feature.icon;

          return (

            <Card
              key={feature.title}
              className="
                group
                rounded-3xl
                border-green-100
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[rgb(14,110,74)]
                hover:shadow-xl
              "
            >

              <CardContent className="p-7">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgb(14,110,74)]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[rgb(14,110,74)]">

                  <Icon
                    size={30}
                    className="text-[rgb(14,110,74)] group-hover:text-white"
                  />

                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">

                  {feature.title}

                </h3>

                <p className="mt-4 leading-7 text-gray-600">

                  {feature.description}

                </p>

                <div className="mt-6 flex items-center gap-2 text-[rgb(14,110,74)]">

                  <CheckCircle2 size={18} />

                  <span className="font-medium">
                    Available for Students
                  </span>

                </div>

              </CardContent>

            </Card>

          );

        })}

      </div>

    </section>
  );
}