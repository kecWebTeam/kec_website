import Link from "next/link";
import { ReactNode } from "react";

export default function RibbonCard({
  title,
  children,
  footerHref,
  footerLabel,
}: {
  title: string;
  children: ReactNode;
  footerHref: string;
  footerLabel: string;
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-[#e5ded0] bg-white shadow-sm">
      <div className="relative">
        <div
          className="bg-linear-to-r from-[#0F6A43] to-[#0a4c30] px-6 py-4 text-center"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)",
          }}
        >
          <h3 className="text-lg font-bold tracking-wide text-white">
            {title}
          </h3>
        </div>
      </div>

      <div className="flex-1 px-5 pb-4 pt-2">{children}</div>

      <div className="flex justify-center pb-5">
        <Link
          href={footerHref}
          className="rounded-md bg-linear-to-r from-[#C89B3C] to-[#a97f2e] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-md hover:brightness-110"
        >
          {footerLabel}
        </Link>
      </div>
    </div>
  );
}