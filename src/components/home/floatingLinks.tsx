"use client";

import Link from "next/link";

const quickLinks = [
  {
    title: "VIDEO FOR EVC AICTE",
    href: "https://youtu.be/cYMNEnq52p8",
    external: true,
  },
  {
    title: "Placement Portal of Katihar Engineering College",
    href: "https://tpo.keckatihar.in",
    external: true,
  },
  {
    title: "Click here to give feedback to A.I.C.T.E",
    href: "https://www.aicte-india.org/feedback/",
    external: true,
  },
];

export default function FloatingLinks() {
  return (
    <div className="w-full overflow-hidden border-y border-[#C89B3C] bg-white py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...quickLinks, ...quickLinks].map((link, index) => (
          <div key={index} className="mx-8 flex items-center gap-2">
            <span className="relative flex items-center gap-1 rounded-full bg-linear-to-r from-[#08381F] to-[#8a6a1f] px-3 py-1 text-xs font-extrabold tracking-wide text-white shadow-[0_0_10px_rgba(138,106,31,0.7)] ring-1 ring-[#C89B3C]/60 animate-pulse">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C89B3C] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C89B3C]"></span>
              </span>
              NEW
            </span>

            <Link
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              className="font-medium text-[#0F6A43] hover:text-[#C89B3C] hover:underline"
            >
              {link.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}