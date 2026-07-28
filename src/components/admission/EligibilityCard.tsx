import { LucideIcon, ArrowRight } from "lucide-react";

interface EligibilityCardProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  items: string[];
  color?: string;
}

export default function EligibilityCard({
  icon: Icon,
  title,
  subtitle,
  items,
  color = "rgb(14,110,74)",
}: EligibilityCardProps) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-green-100
      bg-white
      p-7
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
    "
    >
      {/* Background Decoration */}

      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-green-50 transition-all duration-500 group-hover:scale-150" />

      {/* Icon */}

      <div
        className="relative flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg transition group-hover:scale-110"
        style={{
          backgroundColor: color,
        }}
      >
        <Icon size={30} />
      </div>

      {/* Title */}

      <h3 className="relative mt-6 text-2xl font-bold text-gray-800">
        {title}
      </h3>

      {subtitle && (
        <p className="mt-2 text-gray-500 leading-7">
          {subtitle}
        </p>
      )}

      {/* List */}

      <ul className="relative mt-6 space-y-4">

        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3"
          >
            <div
              className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
              style={{
                backgroundColor: color,
              }}
            >
              <ArrowRight size={14} />
            </div>

            <span className="leading-7 text-gray-700">
              {item}
            </span>

          </li>
        ))}

      </ul>

    </div>
  );
}