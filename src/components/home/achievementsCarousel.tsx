'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

// Put your images in /public/images and list the paths here.
// Leave a slot as "" to show an empty placeholder frame.
const images: string[] = [
  '/images/achievementImage (1).jpeg',
  '/images/achievementImage.jpeg',
  '/images/achievementImage (1).jpeg',
  '/images/achievementImage.jpeg',
  '/images/achievementImage (1).jpeg',
  '/images/achievementImage.jpeg',
];

export default function AchievementsCarousel() {
  return (
    <section className="mx-auto max-w-5xl px-4">
      <h2 className="text-xl font-bold text-[#0b5c3f] sm:text-2xl">Achievements</h2>
      <div className="mb-6 mt-1.5 h-0.75 w-20 rounded-full bg-[#c9922a] sm:mb-8" />

      <Carousel opts={{ align: 'start' }} className="w-full">
        <CarouselContent className="-ml-4 sm:-ml-6">
          {images.map((src, i) => (
            <CarouselItem key={i} className="basis-full pl-4 sm:basis-1/2 sm:pl-6">
              <div className="overflow-hidden rounded-2xl border-2 border-[#0b5c3f] bg-[#eaf7ee] shadow-md">
                {src ? (
                  <div className="relative aspect-4/3 w-full sm:aspect-[3/2.6]">
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-4/3 w-full items-center justify-center text-sm font-semibold text-[#5b6b62] sm:aspect-[3/2.6]">
                    Put image here
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2 h-9 w-9 border-none bg-[#0b5c3f] text-white hover:bg-[#c9922a] hover:text-white disabled:bg-[#b9c9c0] sm:-left-12 sm:h-11 sm:w-11" />
        <CarouselNext className="right-2 h-9 w-9 border-none bg-[#0b5c3f] text-white hover:bg-[#c9922a] hover:text-white disabled:bg-[#b9c9c0] sm:-right-12 sm:h-11 sm:w-11" />
      </Carousel>
    </section>
  );
}