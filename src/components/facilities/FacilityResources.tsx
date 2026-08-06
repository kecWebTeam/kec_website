"use client";

import { ExternalLink, Globe } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Resource {
  title: string;
  description: string;
  url: string;
  badge?: string;
}

interface FacilityResourcesProps {
  title?: string;
  subtitle?: string;
  resources: Resource[];
}

export default function FacilityResources({
  title = "Digital Resources",
  subtitle = "Access official learning resources and useful platforms.",
  resources,
}: FacilityResourcesProps) {
  return (
    <section className="mt-20">

      {/* Heading */}

      <div className="mb-10">

        <Badge className="bg-[rgb(14,110,74)] hover:bg-[rgb(14,110,74)]">
          Resources
        </Badge>

        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          {title}
        </h2>

        <p className="mt-3 max-w-3xl text-lg leading-8 text-gray-600">
          {subtitle}
        </p>

      </div>

      {/* Grid */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {resources.map((resource) => (

          <Card
            key={resource.title}
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

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgb(14,110,74)]/10">

                <Globe
                  size={28}
                  className="text-[rgb(14,110,74)]"
                />

              </div>

              <div className="mt-6">

                <h3 className="text-xl font-bold text-gray-900">
                  {resource.title}
                </h3>

                {resource.badge && (
                  <Badge
                    variant="secondary"
                    className="mt-3"
                  >
                    {resource.badge}
                  </Badge>
                )}

                <p className="mt-4 leading-7 text-gray-600">
                  {resource.description}
                </p>

              </div>

              <Button
                asChild
                className="
                  mt-8
                  w-full
                  rounded-xl
                  bg-[rgb(14,110,74)]
                  hover:bg-[rgb(20,145,98)]
                "
              >
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Resource

                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>

            </CardContent>
          </Card>

        ))}

      </div>

    </section>
  );
}