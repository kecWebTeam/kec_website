

import Image from "next/image";
import { Camera, ImageIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface FacilityGalleryProps {
  title?: string;
  subtitle?: string;
  images: {
    src: string;
    alt: string;
  }[];
}

export default function FacilityGallery({
  title = "Gallery",
  subtitle = "Explore the facility through our gallery.",
  images,
}: FacilityGalleryProps) {
  return (
    <section className="mt-20">

      {/* Heading */}

      <div className="mb-10">

        <Badge className="bg-[rgb(14,110,74)] hover:bg-[rgb(14,110,74)]">
          Gallery
        </Badge>

        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          {title}
        </h2>

        <p className="mt-3 max-w-3xl text-lg leading-8 text-gray-600">
          {subtitle}
        </p>

      </div>

      {/* Gallery */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {images.map((image, index) => (

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
              hover:shadow-xl
            "
          >

            <div className="relative aspect-16/10 overflow-hidden">

              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width:768px)100vw,(max-width:1280px)50vw,33vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-end
                  bg-linear-to-t
                  from-black/70
                  via-black/10
                  to-transparent
                  opacity-0
                  transition
                  duration-300
                  group-hover:opacity-100
                "
              >

                <div className="w-full p-5 text-white">

                  <div className="flex items-center gap-2">

                    <Camera size={18} />

                    <span className="font-medium">
                      {image.alt}
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </Card>

        ))}

      </div>

      {/* Empty State */}

      {images.length === 0 && (

        <Card className="rounded-3xl border-dashed border-green-200">

          <div className="flex flex-col items-center justify-center py-20">

            <ImageIcon
              size={60}
              className="text-[rgb(14,110,74)]"
            />

            <h3 className="mt-5 text-2xl font-bold">

              Gallery Coming Soon

            </h3>

            <p className="mt-3 text-gray-500">

              Images will be added shortly.

            </p>

          </div>

        </Card>

      )}

    </section>
  );
}