import { ReactNode } from "react";
import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface FacilityPageProps {
  title: string;
  subtitle: string;
  image: string;
  badge?: string;
  children: ReactNode;
}

export default function FacilityPage({
  title,
  subtitle,
  image,
  badge,
  children,
}: FacilityPageProps) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Hero */}
      <Card className="overflow-hidden rounded-3xl border-0 shadow-2xl">
        <div className="grid lg:grid-cols-2 min-h-130">
          {/* Left Content */}
          <div className="relative flex flex-col justify-center overflow-hidden bg-linear-to-br from-emerald-900 via-emerald-700 to-emerald-500 px-8 py-14 text-white lg:px-14">
            {/* Background Blur Circle */}
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10">
              {badge && (
                <Badge className="mb-6 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md hover:bg-white/20">
                  {badge}
                </Badge>
              )}

              <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                {title}
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-emerald-50">
                {subtitle}
              </p>

              <div className="mt-10 flex gap-4">
                <div className="rounded-xl bg-white/15 px-5 py-4 backdrop-blur-md">
                  <p className="text-2xl font-bold">24×7</p>
                  <p className="text-sm text-emerald-100">Availability</p>
                </div>

                <div className="rounded-xl bg-white/15 px-5 py-4 backdrop-blur-md">
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-sm text-emerald-100">
                    Patient Focused
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              priority
              sizes="(max-width:1024px)100vw,50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

            <div className="absolute bottom-8 left-8 rounded-xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
              <p className="text-lg font-semibold text-emerald-900">
                Advanced Care
              </p>
              <p className="text-sm text-gray-600">
                Modern Infrastructure & Expert Team
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Body */}
      <section className="mt-14">
        <Separator className="mb-10" />

        <div className="mx-auto max-w-6xl">
          {children}
        </div>
      </section>
    </main>
  );
}