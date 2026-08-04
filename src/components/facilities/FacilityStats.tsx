"use client";

import { ReactNode } from "react";
import CountUp from "react-countup";
import { Card } from "@/components/ui/card";

interface Stat {
  icon: ReactNode;
  title: string;
  value: number | string;
  suffix?: string;
  description?: string;
}

interface FacilityStatsProps {
  stats: Stat[];
}

export default function FacilityStats({
  stats,
}: FacilityStatsProps) {
  return (
    <section className="mt-16">

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Quick Highlights
        </h2>

        <p className="mt-3 text-lg text-gray-600">
          A quick overview of the facility.
        </p>

      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat, index) => (

          <Card
            key={index}
            className="
            group
            overflow-hidden
            rounded-3xl
            border-green-100
            shadow-md
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-[rgb(14,110,74)]
            hover:shadow-xl
          "
          >

            <div className="p-7">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgb(14,110,74)]/10 text-[rgb(14,110,74)] transition group-hover:scale-110">

                {stat.icon}

              </div>

              <div className="mt-6">

                <h3 className="text-4xl font-extrabold text-[rgb(14,110,74)]">

                  {typeof stat.value === "number" ? (
                    <>
                      <CountUp
                        end={stat.value}
                        duration={2}
                      />

                      {stat.suffix}
                    </>
                  ) : (
                    stat.value
                  )}

                </h3>

                <p className="mt-3 text-xl font-semibold text-gray-800">

                  {stat.title}

                </p>

                {stat.description && (

                  <p className="mt-2 leading-7 text-gray-500">

                    {stat.description}

                  </p>

                )}

              </div>

            </div>

          </Card>

        ))}

      </div>

    </section>
  );
}