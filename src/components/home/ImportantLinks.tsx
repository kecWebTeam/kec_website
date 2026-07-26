import Link from "next/link";
import RibbonCard from "./RibbonCard";

const importantLinks = [
  { title: "Social Welfare Dept. Bihar", href: "#" },
  { title: "DST Bihar", href: "#" },
  { title: "Education Dept. Bihar", href: "#" },
  { title: "Govt. of Bihar", href: "#" },
  { title: "BCECEB", href: "#" },
  { title: "AKU, Patna", href: "#" },
  { title: "AICTE", href: "#" },
  { title: "Joint Entrance Examination", href: "#" },
];

export default function ImportantLinks() {
  return (
    <RibbonCard title="Important Links" footerHref="#" footerLabel="View All Links">
      <ul className="space-y-3">
        {importantLinks.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className="group flex items-center gap-2 text-[#0F6A43] transition hover:text-[#C89B3C]"
            >
              <span className="text-[#C89B3C] transition group-hover:translate-x-1">
                »
              </span>
              <span className="border-b border-transparent group-hover:border-[#C89B3C]">
                {link.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </RibbonCard>
  );
}