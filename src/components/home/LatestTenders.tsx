import RibbonCard from "./RibbonCard";

const tenders: { date: string; title: string; href: string }[] = [
  // Add tender objects here, e.g.:
  // { date: "2026-07-20", title: "Tender for campus Wi-Fi upgrade", href: "#" },
];

export default function LatestTenders() {
  return (
    <RibbonCard title="Latest Tenders" footerHref="#" footerLabel="View All Tenders">
      {tenders.length === 0 ? (
        <p className="py-10 text-center text-sm text-gray-400">
          No tenders available right now.
        </p>
      ) : (
        <ul className="divide-y divide-[#f0ebe0]">
          {tenders.map((tender, i) => (
            <li key={i} className="flex items-start gap-3 py-2.5">
              <span className="mt-0.5 shrink-0 whitespace-nowrap rounded bg-[#0F6A43]/10 px-2 py-0.5 text-xs font-medium text-[#0F6A43]">
                {tender.date}
              </span>
              <a
                href={tender.href}
                className="text-sm leading-snug text-gray-700 underline decoration-[#C89B3C]/40 underline-offset-2 transition hover:text-[#C89B3C] hover:decoration-[#C89B3C]"
              >
                {tender.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </RibbonCard>
  );
}