import Link from "next/link";
import RibbonCard from "./RibbonCard";

const notices = [
  { date: "2026-07-24", title: "DC meeting", href: "#" },
  { date: "2026-07-24", title: "Class Start Notice of B.Tech 1st semester (2026-30)", href: "#" },
  { date: "2026-07-20", title: "3rd sem Class Commencement notice", href: "#" },
  { date: "2026-07-18", title: "Notice regarding Hostel (First year student)", href: "#" },
  { date: "2026-07-18", title: "Alaknanda Girls Hostel, Admission fee structure, 2026.", href: "#" },
  { date: "2026-07-17", title: "My Bharat registration and participation in Nasha Mukt Bharat Abhiyan 2026 district level competitions", href: "#" },
];

function NoticeItem({ notice }: { notice: (typeof notices)[number] }) {
  return (
    <li className="flex items-start gap-3 py-3">
      <span className="mt-0.5 shrink-0 whitespace-nowrap rounded bg-[#0F6A43]/10 px-2.5 py-1 text-sm font-medium text-[#0F6A43]">
        {notice.date}
      </span>
      <Link
        href={notice.href}
        className="text-base leading-snug text-gray-700 underline decoration-[#C89B3C]/40 underline-offset-2 transition hover:text-[#C89B3C] hover:decoration-[#C89B3C]"
      >
        {notice.title}
      </Link>
    </li>
  );
}

export default function LatestNotices() {
  const hasNotices = notices.length > 0;

  return (
    <RibbonCard title="Latest Notices" footerHref="#" footerLabel="View All Notices">
      <div className="h-96 overflow-hidden">
        {hasNotices ? (
          <ul className="animate-scroll-up divide-y divide-[#f0ebe0]">
            {[...notices, ...notices].map((notice, i) => (
              <NoticeItem key={i} notice={notice} />
            ))}
          </ul>
        ) : (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-gray-400">
              No notices available right now.
            </p>
          </div>
        )}
      </div>
    </RibbonCard>
  );
}