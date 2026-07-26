"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  { src: "/images/slideImage.jfif", alt: "Orientation and Induction Programme" },
  { src: "/images/college.png", alt: "college image" },
  { src: "/images/slideImage.jpg", alt: "Yoga session with students" },
];

export default function AutoImageCarousel() {
  const [current, setCurrent] = useState(0);
  const direction = useRef(1); // 1 = forward, -1 = backward

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        // Reverse only after showing the last image
        if (prev === slides.length - 1) {
          direction.current = -1;
        } else if (prev === 0) {
          direction.current = 1;
        }

        return prev + direction.current;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrent((prev) => {
      if (prev === 0) {
        direction.current = 1;
        return prev + 1;
      }
      direction.current = -1;
      return prev - 1;
    });
  };

  const goToNext = () => {
    setCurrent((prev) => {
      if (prev === slides.length - 1) {
        direction.current = -1;
        return prev - 1;
      }
      direction.current = 1;
      return prev + 1;
    });
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-[#e5ded0] bg-black">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full shrink-0">
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-70 w-full object-cover md:h-90"
            />
          </div>
        ))}
      </div>

      {/* Left button */}
      <button
        type="button"
        onClick={goToPrev}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-[#0b4d2e] focus:outline-none focus:ring-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Right button */}
      <button
        type="button"
        onClick={goToNext}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-[#0b4d2e] focus:outline-none focus:ring-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}